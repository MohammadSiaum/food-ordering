import React from "react";

const AddToCartButtonForMenuItem = ({ onClick, selectedPrice, image }) => {
  return (
      <button
        type="button"
        onClick={onClick}
        className="bg-purple-600 hover:bg-purple-700 px-5 p-3 text-white border rounded"
      >
        Add To Cart {' '}
        <span className="font-semibold">${selectedPrice}</span>
      </button>
  );
};

export default AddToCartButtonForMenuItem;
