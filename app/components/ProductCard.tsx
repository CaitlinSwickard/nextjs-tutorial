import React from "react";
import AddToCart from "./AddToCart";

// server side component, pulled out button for client side rendering
const ProductCard = () => {
  return (
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
