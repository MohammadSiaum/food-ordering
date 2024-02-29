import { UploadButton } from "@uploadthing/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DeleteIcon from '../../components/icons/DeleteIcon';
import PlusIcon from '../../components/icons/PlusIcon';
import BookmarkIcon from '../../components/icons/BookmarkIcon';
import MenuItemPriceProps from './menuItemPriceProps';


const MenuItemForm = ({ onSubmit, menuItem, buttomName }) => {
  const [image, setImage] = useState(menuItem?.image || "");
  const [itemName, setItemName] = useState(menuItem?.itemName || "");
  const [itemDescrip, setItemDescrip] = useState(menuItem?.itemDescrip || "");
  const [itemPrice, setItemPrice] = useState(menuItem?.itemPrice || "");
  const [sizes, setSizes] = useState(menuItem?.sizes || []);
  const [extraIngredientPrices , setExtraIngredientPrices] = useState( menuItem?.extraIngredientPrices|| []);
  const [category, setCategory] = useState(menuItem?.category || '');
  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))

  }, []);
  
  
  console.log(categories);


  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="grid grid-cols-2">
          <div className="my-auto space-y-2 mb">
            <label>
              <span className="text-gray-700">Item image :</span>
            </label>

            <div className="w-24 my-auto">
              <UploadButton
                className="ut-button:w-24  ut-button:bg-fuchsia-600 ut-button:rounded ut-button:text-sm"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setImage(res[0].url);
                  toast.success("Upload complete");
                }}
                onUploadError={(error) => {
                  // alert(`ERROR! ${error.message}`);
                  toast.error(`${error.message}`);
                }}
              />
            </div>
          </div>
          <div className="mx-auto">
            {image ? (
              <Image
                className="rounded"
                src={image}
                width={130}
                height={130}
                alt="pizza-guru"
              />
            ) : (
              <div className="w-28 h-28 p-5 border border-gray-400 rounded text-center bg-gray-200">
                No image
              </div>
            )}
          </div>
        </div>
      </div>
      <form
        onSubmit={(event) =>
          onSubmit(event, { image, itemName, itemDescrip, category, itemPrice,sizes, extraIngredientPrices, })
        }
        className="space-y-4"
      >
        <div className="space-y-2">
          <label>
            <span className="block text-gray-700">Item name</span>
          </label>
          <input
            value={itemName}
            onChange={(ev) => setItemName(ev.target.value)}
            name="name"
            className="block outline-fuchsia-500 text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
            type="text"
            placeholder="Item name"
            required
          />
        </div>
        <div className="space-y-2">
          <label>
            <span className="block text-gray-700">Description of item</span>
          </label>
          <textarea
            value={itemDescrip}
            onChange={(ev) => setItemDescrip(ev.target.value)}
            className="block outline-fuchsia-500 text-gray-700  text-md rounded w-full border border-gray-300 p-2"
            placeholder="Description"
            required
          />
        </div>
        <div className="space-y-2">
          <label>
            <span className="block text-gray-700">Select category</span>
          </label>
          <select
             value={category}
             onChange={(ev) => setCategory(ev.target.value)}
             className="block bg-purple-50 outline-fuchsia-500 text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
          >
            {categories?.length > 0 && categories.map(c => (
              <option key={c._id}>{c.name}</option>
            ))}


          </select>
          
        </div>
        <div className="space-y-2">
          <label>
            <span className="block text-gray-700">Base price ($)</span>
          </label>
          <input
            onChange={(ev) => setItemPrice(ev.target.value)}
            value={itemPrice}
            className="block outline-fuchsia-500 text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
            type="text"
            placeholder="price $"
            required
          />
        </div>
        <MenuItemPriceProps name={'Set sizes '}
                            addLabel={'Add item size'}
                            props={sizes} 
                            setProps={setSizes} />

        <MenuItemPriceProps name={'Extra ingredients '}
                            addLabel={'Add ingredients prices'}
                            props={extraIngredientPrices} 
                            setProps={setExtraIngredientPrices} /> 


        <div className="">
          <button
            type="submit"
            className="bg-fuchsia-700 hover:bg-fuchsia-800 transiton-all mt-7 justify-center w-full flex gap-5 text-white p-2 border border-fuchsia-700 rounded"
          >
            <BookmarkIcon />
            <span>{buttomName}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuItemForm;
