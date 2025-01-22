"use client";

import React from "react";

interface AddToCartButtonProps {
  productId: string;
  quantity: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId, quantity }) => {
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      });

      if (response.ok) {
        alert("Added to cart successfully!");
      } else {
        alert("Failed to add to cart");
      }
    } catch (error) {
        alert(`Error during checkout: ${error}`);
    }
  };

  return (
    <button className="cart-button" onClick={handleCheckout}>
      Checkout
    </button>
  );
};

export default AddToCartButton;
