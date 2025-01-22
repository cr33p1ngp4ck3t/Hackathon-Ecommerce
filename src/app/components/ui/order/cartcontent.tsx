'use client'
import Image from "next/image"
import "@/app/styles/shop-cart.css"
import { useState, useEffect } from "react";
import AddToCartButton from "./addtocart";

export function CartContent({ order }: { order: any }) {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : order?.items || [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const updateQuantity = (productId: string, quantity: number) => {
        setCartItems((prev: any[]) =>
            prev.map((item) =>
                item.product._id === productId
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            )
        );
    };

    const removeItem = (productId: string) => {
        setCartItems((prev: any[]) => prev.filter((item) => item.product._id !== productId));
    };

    const calculateSubtotal = () =>
        cartItems.reduce(
            (sum: number, item: { product: { price: number }; quantity: number }) =>
                sum + item.product.price * item.quantity,
            0
        ).toFixed(2);


  return (
        <div className="cart-page">
            <div className="cart-container">
                <div className="cart-content">
                    <div className="cart-title">Your shopping cart</div>
                    <div className="cart-items"> 
                        <div className="cart-header">
                            <div className="cart-header-item">Product</div>
                            <div className="cart-header-item">Quantity</div>
                            <div className="cart-header-item">Total</div>
                        </div>
                        {cartItems.map((item:any) => (
                            <div className="cart-item" key={item.product._id}>
                                <div className="cart-item-details">
                                    <Image className="cart-item-image" src={ item.product?.image_url } alt={item.product.name} width={100} height={100} />
                                    <div className="cart-item-info">
                                        <div className="item-name">{item.product.name}</div>
                                        {/* <div className="item-description">A timeless ceramic vase with a tri color grey glaze.</div> */}
                                        <div className="item-price">£{item.product.price}</div>
                                    </div>
                                </div>
                                <div className="cart-item-quantity justify-end"> 
                                    <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    className="flex justify-end items-center bg-inherit "
                                    onChange={(e) =>
                                        updateQuantity(item.product._id, parseInt(e.target.value, 10))
                                    }
                                    />
                                    </div>
                                <div className="cart-item-total justify-center items-center ">£
                                    {cartItems.reduce((sum: number, item: { product: { price: number; }; quantity: number; }) => sum + item.product.price * item.quantity, 0)
                                    .toFixed(2)}
                                </div>
                                <button onClick={() => removeItem(item.product._id)}>
                                    <Image src={'trash.svg'} alt="" width={30} height={30}/>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div style={{display:"flex", justifyContent:"flex-end", borderTop:"1px solid lightgray", margin:"10px 0"}}>
                        <div style={{margin:"10px 0", display:"flex", flexDirection:"column", gap:"10px", alignItems:"flex-end"}}>
                            <div style={{display:"flex", alignItems:"center", justifyContent:"flex-end", gap:"20px"}}>
                                <div style={{fontSize:"20px", display:"inline", gap:"10px", color:"#4E4D93"}}>Subtotal</div><span style={{fontSize:"24px"}}>{calculateSubtotal()}</span>
                            </div>
                            <div style={{color:"#4E4D93", fontSize:"14px"}}>Taxes and shipping are calculated at checkout</div>
                            <button id="input-checkout">Go To Checkout</button>
                            <AddToCartButton productId={order.items[0].product._id} quantity={order.items.length} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
