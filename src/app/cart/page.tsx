'use client';
import { useEffect, useState } from 'react';
import { CartContent } from "../components/ui/order/cartcontent"
import { Footer, Header } from "../components/ui/misc/nav"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  return (
    <div>
      <Header />
      {cartItems.length > 0 ? (
        cartItems?.map((item: any, index: number) => (
          <CartContent key={`${index}`} order={item} />
        ))
      ) : (
        <p className="flex w-full my-12 items-center justify-center text-2xl text-center">
          No items in cart.<br/> Add some products to get started
        </p>
      )}
      <Footer />
    </div>
  )
}
