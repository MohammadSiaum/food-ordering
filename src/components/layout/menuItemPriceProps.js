import React, { useState } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import PlusIcon from "../icons/PlusIcon";
import UpIcon from "../icons/UpIcon";
import DownIcon from "../icons/DownIcon";

const MenuItemPriceProps = ({ name, addLabel, props, setProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  function addProp() {
    setProps((oldSizes) => {
      return [...oldSizes, { name: "", price: 0 }];
    });
  }

  function editProp(ev, index, prop) {
    const newValue = ev.target.value;
    setProps((prevSizes) => {
      const newSizes = [...prevSizes];
      newSizes[index][prop] = newValue;

      return newSizes;
    });
  }

  function removeProp(indexToRemove) {
    const prevSizes = props;
    const updateSizes = prevSizes.filter(
      (value, index) => index !== indexToRemove
    );
    setProps(updateSizes);
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-gray-700 flex mb-3 gap-3 text-center"
      >
        {isOpen ? <UpIcon /> : <DownIcon />}
        <span className="block text-gray-700">{name}</span>
        <span className="font-semibold">({props?.length})</span>
      </button>

      <div className={isOpen ? "block" : "hidden"}>
        {props.length > 0 &&
          props.map((size, index) => (
            <>
              <div className="flex gap-6 items-end pb-3">
                <div className="space-y-2">
                  <label>
                    <span className="block text-sm text-gray-700">
                      Size name
                    </span>
                  </label>
                  <input
                    value={size.name}
                    onChange={(ev) => editProp(ev, index, "name")}
                    className="block outline-fuchsia-500 text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
                    type="text"
                    placeholder="Size name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label>
                    <span className="block text-sm text-gray-700">
                      Extra price
                    </span>
                  </label>
                  <input
                    value={size.price}
                    onChange={(ev) => editProp(ev, index, "price")}
                    className="block outline-fuchsia-500 text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
                    type="text"
                    placeholder="Extra price"
                    required
                  />
                </div>
                <div className="">
                  <button
                    onClick={() => removeProp(index)}
                    type="button"
                    className="bg-red-500 p-2 hover:bg-red-600 rounded-full text-white "
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </>
          ))}

        <div className="">
          <button
            onClick={addProp}
            type="button"
            className="flex items-center justify-center gap-3 text-center bg-purple-200 hover:bg-purple-300 border w-full rounded  border-gray-300 p-1"
          >
            <PlusIcon />
            <span>{addLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemPriceProps;
