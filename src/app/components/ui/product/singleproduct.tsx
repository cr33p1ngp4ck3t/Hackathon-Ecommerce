'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProductDetails({ product }: { product: any }) {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (product: any) => {
        setCartItems((prev: any[]) => {
            const existingItem = prev.find((item) => item.product._id === product._id);
            if (existingItem) {
                return prev.map((item) =>
                    item.product._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="product-hero">
            <div className="container-1">
                <Image src={product.image} alt={product.name} width={721} height={759} />
            </div>
            <div className="container-2">
                <div className="container-desc">
                    <div>
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">£{product.price}</div>
                    </div>
                    <div>
                        <div>Description</div>
                        <div className="product-desc">{product.description}</div>
                        <ul className="product-features">
                            {product.features?.map((feature: string, index: number) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="product-dimensions">
                        <div>Dimension</div>
                        <div className="dimensions-row">
                            <div className="dimension-label">Height</div>
                            <div className="dimension-label">Width</div>
                            <div className="dimension-label">Depth</div>
                        </div>
                        <div className="dimensions-row">
                            <div className="dimension-value">{product.dimensions?.height}</div>
                            <div className="dimension-value">{product.dimensions?.width}</div>
                            <div className="dimension-value">{product.dimensions?.depth}</div>
                        </div>
                    </div>
                    <div className="product-actions gap-5">
                        <div className="product-amount">
                            Amount <span className="amount-value">{product.quantity}</span>
                        </div>
                        <div className="add-to-cart">
                            <button className='cart-button' onClick={() => addToCart(product.name)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
