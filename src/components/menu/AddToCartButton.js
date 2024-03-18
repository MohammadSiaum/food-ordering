import React from "react";


const AddToCartButton = ({ hasSizesOrExtras, onClick, itemPrice, image }) => {
  if (!hasSizesOrExtras) {
    return (
      
        <button
          type="button"
          onClick={onClick}
          className="text-white hover:bg-fuchsia-800 my-2 bg-fuchsia-700 py-3 px-6 rounded-full"
        >
          Add To Cart ${itemPrice}
        </button>
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
