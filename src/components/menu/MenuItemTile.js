import Image from 'next/image';
import React from 'react';

const MenuItemTile = ({item, onAddToCart}) => {
    const {image, itemName, itemDescrip, itemPrice} = item;
    return (
        <div className="bg-fuchsia-100 border border-gray-400 hover:shadow-lg hover:shadow-black/25 hover:bg-fuchsia-200 cursor-pointer p-6 rounded-lg text-center transition-all">
        <div>
          <Image
            className="rounded-lg w-3/5 mx-auto"
            width={300}
            height={300}
            src={image}
            alt="pizza"
          />
        </div>
        <h4 className="text-2xl my-3">{itemName}</h4>
        <p className="text-gray-700 mb-3 text-sm">{itemDescrip}</p>
        <button
          type="button"
          onClick={onAddToCart}
          className="text-white hover:bg-fuchsia-800 my-2 bg-fuchsia-700 py-3 px-6 rounded-full"
        >
          Add To Cart ${itemPrice}
        </button>
      </div>
    );
};

export default MenuItemTile;