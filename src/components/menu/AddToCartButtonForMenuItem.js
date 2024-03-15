import React from "react";
import FlyingButton from "react-flying-item";

const AddToCartButtonForMenuItem = ({ onClick, selectedPrice, image }) => {
  return (
    <FlyingButton
      className="w-full"
      targetTop={"5%"}
      targetLeft={"80%"}
      src={image}
    >
      <button
        type="button"
        onClick={onClick}
        className="bg-purple-600 hover:bg-purple-700 px-5 p-3 text-white border rounded"
      >
        Add To Cart {' '}
        <span className="font-semibold">${selectedPrice}</span>
      </button>
    </FlyingButton>
  );
};

export default AddToCartButtonForMenuItem;
