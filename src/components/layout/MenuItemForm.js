import { UploadButton } from "@uploadthing/react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MenuItemForm = ({onSubmit, menuItem, buttomName}) => {
  const [image, setImage] = useState(menuItem?.image || '');
  const [itemName, setItemName] = useState(menuItem?.itemName || '');
  const [itemDescrip, setItemDescrip] = useState(menuItem?.itemDescrip || '');
  const [itemPrice, setItemPrice] = useState(menuItem?.itemPrice || '');

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label>
          <span className="text-gray-700">Edit item image </span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <div className="w-24">
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
          <div>
            {image ? (
              <Image
                className="rounded"
                src={image}
                width={100}
                height={100}
                alt="pizza-guru"
              />
            ) : (
              <div className="w-24 h-24 p-5 rounded text-center bg-gray-200">
                No image
              </div>
            )}
          </div>
        </div>
      </div>
      <form onSubmit={event => onSubmit(event, {image, itemName, itemDescrip, itemPrice})} className="space-y-4">
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
        <div className="">
          <button
            type="submit"
            className="bg-fuchsia-700 hover:bg-fuchsia-800 transiton-all mt-7 justify-center w-full flex gap-4 text-white p-2 border border-fuchsia-700 rounded"
          >
            {buttomName}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuItemForm;
