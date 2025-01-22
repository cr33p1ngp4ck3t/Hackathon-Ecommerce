
import { client, writeClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, quantity } = body;

    const product = await client.fetch(
      groq`*[_type == "product" && _id == $productId][0]`,
      { productId }
    );

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    if (product.quantity < quantity) {
      return NextResponse.json(
        { message: "Insufficient stock" },
        { status: 400 }
      );
    }

    await client
      .patch(productId)
      .dec({ quantity: quantity })
      .commit();

    const order = await writeClient.create({
      _type: "order",
      items: [{
        _type: "orderItem",
        product: {
          _type: "reference",
          _ref: productId
        },
        quantity: quantity
      }],
      status: "pending"
    });

    return NextResponse.json({ order }, { status: 201 });
    
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing order" },
      { status: 500 }
    );
  }
}
