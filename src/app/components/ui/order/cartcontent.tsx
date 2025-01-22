'use client'
import Image from "next/image"
import "@/app/styles/shop-cart.css"
import { useCart } from "@/app/context/carthandler/page";
import Link  from "next/link";
import { useMemo } from "react";

export function CartContent( order? : { order: any }) {
    

    return (
        <div className="cart-page">
            <div className="cart-container">
                <div className="cart-content">
                    <div className="cart-title">Your shopping cart</div>
                    <div className="cart-items"> 
                        <div className="cart-header">
                            <div className="cart-header-item text-2xl">Product</div>
                            <div className="cart-header-item text-2xl">Quantity</div>
                            <div className="cart-header-item text-2xl">Total</div>
                            <div className="cart-header-item text-2xl"></div>
                        </div>
                        <CartDetails />
                    </div>
                    <div style={{display:"flex", justifyContent:"flex-end", borderTop:"1px solid lightgray", margin:"10px 0"}}>
                        <div style={{margin:"10px 0", display:"flex", flexDirection:"column", gap:"10px", alignItems:"flex-end"}}>
                            <CartTotal />
                            <div style={{color:"#4E4D93", fontSize:"14px"}}>Taxes and shipping are calculated at checkout</div>
                            <Link href='/checkout'><button id="input-checkout">Go To Checkout</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}


export const CartDetails= () => {
    const { cartItems, updateQuantity, removeItem } = useCart()

    const cartItemsList = useMemo(() => {
        return cartItems.map((item: any) => (
            <div className="cart-item" key={item.product._id}>
                <div className="cart-item-details">
                    <Image
                        className="cart-item-image"
                        src={item.product?.image}
                        alt={item.product.name}
                        width={100}
                        height={100}
                    />
                    <div className="cart-item-info">
                        <div className="item-name">{item.product.name}</div>
                        <div className="item-price">£{item.product.price}</div>
                    </div>
                </div>
                <div className="items-center flex flex-1">
                    <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        className="flex text-end flex-1 bg-inherit"
                        onChange={(e) =>
                            updateQuantity(
                                item.product._id,
                                parseInt(e.target.value, 10)
                            )
                        }
                    />
                </div>
                <div className="cart-item-total w-full justify-end items-center flex">
                    £{(item.product.price * item.quantity).toFixed(2)}
                </div>
                <button className="flex-1 justify-end items-center flex border-none bg-inherit cursor-default">
                    <Image src={'trash.svg'} alt="" width={30} height={30} onClick={() => removeItem(item.product._id)} className="cursor-pointer" />
                </button>
            </div>
        ));
    }, [cartItems, updateQuantity, removeItem]);
    return (
        <div>
            {cartItemsList}
        </div>
    )
}

export const CartTotal = () => {
    const { cartItems } = useCart();
    const calculateSubtotal = () =>
        cartItems
            .reduce(
                (sum, item) => sum + item.product.price * item.quantity,
                0
            )
            .toFixed(2);

    return (
        <div className="flex items-center justify-between gap-3">
            <div className="text-[#4E4D93] gap-[10px] inline text-3xl  ">Subtotal</div>
            <span className="text-2xl">{calculateSubtotal()}</span>
        </div>
    )
}