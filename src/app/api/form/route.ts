/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formclient } from "@/sanity/lib/client";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const customerDoc = {
      _type: "customer",
      user: {
        name: body.user.name,
        email: body.user.email,
        address: body.user.address,
        phone: body.user.phone,
        postalCode: body.user.postalCode,
        city: body.user.city,
        country: body.user.country,
      },
      createdAt: body.createdAt,
    };

    const createdDoc = await Formclient.create(customerDoc);

    return new Response(
      JSON.stringify({ message: "Customer data saved successfully!", _id: createdDoc._id }), // Return _id
      { status: 200 }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
