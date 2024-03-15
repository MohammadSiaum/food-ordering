import Image from 'next/image';
import React from 'react';
import AddToCartButton from './AddToCartButton';

const MenuItemTile = ({item, onAddToCart}) => {
    const { image, 
            sizes, 
            extraIngredientPrices, 
            itemName, 
            itemDescrip, 
            itemPrice } = item;

    const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;

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

        <AddToCartButton 
           onClick={onAddToCart}
           itemPrice={itemPrice}
           image={image} 
           hasSizesOrExtras={hasSizesOrExtras} />
  
      </div>
    );
};

export default MenuItemTile;