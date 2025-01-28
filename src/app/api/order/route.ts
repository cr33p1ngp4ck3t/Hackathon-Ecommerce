/* eslint-disable @typescript-eslint/no-explicit-any */
import { writeClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, customerId } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { message: "Invalid order data" },
        { status: 400 }
      );
    }

    const updatedProducts = [];
    for (const { productId, quantity } of items) {
      const product = await writeClient.fetch(
        groq`*[_type == "product" && _id == $productId][0]`,
        { productId }
      );


      if (product.quantity < quantity) {
        return NextResponse.json(
          { message: `Insufficient stock for product ${product.name}` },
          { status: 400 }
        );
      }

      await writeClient
        .patch(productId)
        .dec({ quantity })
        .commit();

      updatedProducts.push({
        _key: uuidv4(),
        product: { _type: "reference", _ref: productId },
        quantity,
      });
    }

    const orderId = uuidv4();
    const order = await writeClient.create({
      _type: "order",
      orderId,
      items: updatedProducts,
      status: "pending",
      customer: { _type: "reference", _ref: customerId }, // Reference the customer in the order
    });

    // Return success response
    return NextResponse.json({ order }, { status: 201 });

  } catch (error) {
    console.error("Error processing order:", error);
    return NextResponse.json(
      { message: "Error processing order" },
      { status: 500 }
    );
  }
}
