"use client";

import React, { useEffect, useState } from "react";
import { useProfile } from "../../../components/UserProfile";
import Link from "next/link";
import Image from "next/image";


const ViewPage = () => {
  const { loading, data } = useProfile();
  const [items, setItems] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch("../api/menu-items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="border border-gray-300 rounded p-9 py-14">
      <h2 className="text-2xl text-center text-fuchsia-700 mb-9">Menu items</h2>
      <div className='flex justify-start pb-7'>
        <Link 
            href={'/dashboard/menu-items/add-item'} 
            className='bg-purple-600 hover:bg-purple-700 p-1 text-white rounded px-4'
        >Add item</Link>
    </div>
      <div className="grid grid-cols-3 gap-5">
        {items?.length > 0 &&
          items.map((item) => (
            <Link href={"/dashboard/menu-items/edit-item/"+item._id} key={item._id}>
              <div className="bg-purple-100 border border-gray-400 hover:shadow-lg hover:shadow-black/25 hover:bg-purple-200 cursor-pointer p-3 rounded-lg text-center transition-all">
                <div>
                  <Image
                    className="rounded-lg w-3/5 mx-auto"
                    src={item.image}
                    alt="pizza"
                    height={100}
                    width={100}
                    
                  />
                </div>
                <h4 className="text-xl my-2">{item.itemName}</h4>
                <button className="text-white text-sm hover:bg-fuchsia-800 my-2 bg-violet-600 py-2 px-3 rounded-full">
                  Base price ${item.itemPrice}
                </button>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ViewPage;
