"use client";
import React from "react";

// setting small button component to client side rather than full product card
const AddToCart = () => {
  return (
    <div className="btn btn-primary">
      <button onClick={() => console.log("Click")}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
