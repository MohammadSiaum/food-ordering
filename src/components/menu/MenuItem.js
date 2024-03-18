import Image from "next/image";
import pizza from "/public/images/pizza.png";
import { useContext, useState } from "react";
import { CartContext } from "../AppContext";
import toast from "react-hot-toast";
import MenuItemTile from '../menu/MenuItemTile';
import AddToCartButtonForMenuItem from "./AddToCartButtonForMenuItem";



export default function MenuItem({ item }) {
  const {
    image,
    itemName,
    itemDescrip,
    itemPrice,
    sizes,
    extraIngredientPrices,
  } = item;
  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || null);
  const [selectedExtras, setSelectedExtras] = useState([])
  const { addToCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  function handleAddToCartButton() {
    const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0;
    if(hasOptions && !showPopup) {
      setShowPopup(true);
      return;
    }
    addToCart(item, selectedSize, selectedExtras);
    setShowPopup(false);
    toast.success('Added cart');
    /* setTimeout(() => {
      setShowPopup(false);

    }, 1000); */
    
  }

  function handleExtraThing(ev, extraThing) {
    const checked = ev.target.checked;
    if(checked) {
      setSelectedExtras(prev => [...prev, extraThing]);
    }
    else {
      setSelectedExtras(prev => {
        return prev.filter(ex => ex.name !== extraThing.name);
      })
    }
    
  }

  let selectedPrice = itemPrice;
  if (selectedSize) {
    selectedPrice += selectedSize.price;
  }
  if(selectedExtras?.length > 0) {
    for (const extra of selectedExtras) {
      selectedPrice += extra.price;
    }

  }

  return (
    <>
      {showPopup && (
        <div
           onClick={() => setShowPopup(false)} 
           className="fixed inset-0 bg-black/80 flex items-center justify-center">
            <div 
               onClick={ev => ev.stopPropagation()}
               className="bg-white p-1 py-3 rounded border border-purple-300 max-w-lg">
               <div 
                 className="overflow-y-scroll p-4"
                 style={{maxHeight:'calc(100vh - 110px)'}}>
                  <Image 
                    src={image}
                    alt='pizza-guru'
                    width={200}
                    height={200}
                    className="mx-auto"

                    />
                    <h2 className="text-2xl my-3 text-center">{itemName}</h2>
                    <p className="text-md text-center text-gray-600">{itemDescrip}</p>

                    {sizes?.length > 0 && (
                      <div>
                        <h3 className="text-center mt-4 mb-2 text-lg text-gray-800">Pick your size</h3>
                        {sizes.map(size => (
                           <label 
                               key={size} 
                               className="flex items-center gap-2 border rounded mb-1 p-3">
                                 <input 
                                    type="radio"
                                    onClick={() => setSelectedSize(size)}
                                    checked={selectedSize?.name === size.name} 
                                    name="size" />
                                 {size.name} ${itemPrice + size.price}
                           </label>
                        ))}
                      </div>
                    )}
                    {extraIngredientPrices?.length > 0 && (
                      <div>
                        <h3 className="text-center mt-4 mb-2 text-lg text-gray-800">Any extras?</h3>
                        {extraIngredientPrices.map(extraThing => (
                           <label 
                               key={extraThing} 
                               className="flex items-center gap-2 border rounded mb-1 p-3">
                                 <input 
                                    type="checkbox" 
                                    onClick={ev => handleExtraThing(ev, extraThing)}
                                    name="size" />
                                 {extraThing.name} +${extraThing.price}
                           </label>
                        ))}
                      </div>
                    )}
                    <div className="flex mt-7 justify-between">

                      <AddToCartButtonForMenuItem 
                        onClick={handleAddToCartButton} 
                        image={image} 
                        selectedPrice={selectedPrice} />
                    
                       <button 
                         type="button"
                         onClick={() => setShowPopup(false)}
                         className="bg-gray-700 hover:bg-gray-800 px-7 p-3 text-white border rounded">Cancel Cart
                      </button>
                    </div>
               </div>

            </div>

        </div>
      )}
      <MenuItemTile item={item} onAddToCart={handleAddToCartButton} />
    </>
  );
}
