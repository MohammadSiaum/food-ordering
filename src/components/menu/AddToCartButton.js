import React from "react";
import FlyingButton from "react-flying-item";

const AddToCartButton = ({ hasSizesOrExtras, onClick, itemPrice, image }) => {
  if (!hasSizesOrExtras) {
    return (
      <FlyingButton
         targetTop={'5%'}
         targetLeft={'85%'}
         src={image}
      >
        <button
          type="button"
          onClick={onClick}
          className="text-white hover:bg-fuchsia-800 my-2 bg-fuchsia-700 py-3 px-6 rounded-full"
        >
          Add To Cart ${itemPrice}
        </button>
      </FlyingButton>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white hover:bg-fuchsia-800 my-2 bg-fuchsia-700 py-3 px-6 rounded-full"
    >
      Add To Cart ${itemPrice}
    </button>
  );
};

export default AddToCartButton;
