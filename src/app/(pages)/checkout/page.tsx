/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { AboutHeader, FooterProduct } from "../../components/ui/misc/nav";
import {  CartDetails, CartTotal } from "../../components/ui/order/cartcontent";
import "@/app/styles/page-product.css"
import "@/app/styles/page-about.css"
import "@/app/styles/shop-cart.css"
import "@/app/styles/globals.css"
import { CheckoutForm } from "@/app/components/ui/misc/form";

export default function Checkout() {

  return (
    <div>
        <AboutHeader />
        <div>
            <div className="mx-6 my-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid flex-col sm:grid-cols-[1fr_0.8fr] gap-5  ">
                        <CheckoutForm  />
                        <div className="mx-auto flex w-full h-min justify-center sticky top-0 overflow-y-auto ">
                            <div className=" bg-[#F9F9F9] p-6 w-full">
                                <div className="flex flex-col gap-3 py-6  ">
                                    <div className="text-4xl font-bold">Checkout</div>
                                    <div><CartDetails /></div>
                                    <div className="text-2xl"><CartTotal /></div>
                                    <div className="z-20 inset-0 bg-transparent  "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterProduct />
    </div>
    )
}