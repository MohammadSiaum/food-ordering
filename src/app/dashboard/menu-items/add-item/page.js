'use client'

import React, { useState } from 'react';
import  {useProfile}  from "../../../../components/UserProfile";
import { UploadButton } from '@uploadthing/react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';


const addItem = () => {
  const { loading, data } = useProfile();

  const [image, setImage] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemDescrip, setItemDescrip] = useState('');
  const [itemPrice, setItemPrice] = useState('');


  async function handleItemSave(event) {
    event.preventDefault()
    // console.log(image, itemName, itemDescrip, itemPrice);
    
    const item = { image, itemName, itemDescrip, itemPrice }
    const savingPromise = new Promise(async(resolve, reject)=> {
      const response = await fetch('../../api/menu-items', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {'Content-Type': 'application/json'}
      });

      if(response.ok) {
        event.target.reset();
        resolve();
      }
      else {
        reject();
      }

    });

    await toast.promise(savingPromise, {
       loading: 'Saving this tasty item...',
       success: 'Saved tasty item.',
       error: 'Error, something was wrong !'
    })
    
  }

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h2>Loading...</h2>
      </div>
    );
  }

    return (
        <section className='max-w-md ml-20 px-10 py-5 pb-10 rounded border border-gray-300'>
            <div className='flex justify-end pb-5'>
               <Link 
              href={'/dashboard/menu-items/view-items'} 
              className='bg-purple-600 p-1 text-white rounded px-2'
               >view all items</Link>
            </div>
          
          <h2 className='mb-5 text-center text-fuchsia-700 text-2xl'>Add Item</h2>
          <div>
            <div className="space-y-4">
             <div className="space-y-2">
                <label>
                  <span className="text-gray-700">Set item image </span>
                </label>
                 <div className='grid grid-cols-2 gap-3'>  
                   <div className='w-24'>
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
                      {
                         image 
                            ? <Image
                              className="rounded"
                              src={image}
                              width={100}
                              height={100}
                              alt="pizza-guru"
                           /> 
                            : <div className='w-24 h-24 p-5 rounded text-center bg-gray-200'>No image</div>
                      }

                   </div>
                 </div>
              </div>
             <form className='space-y-4' onSubmit={handleItemSave}>
              <div className="space-y-2">
                <label>
                  <span className="block text-gray-700">Item name</span>
                </label>
                <input
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
                  Save Item
                </button>
              </div>
            </form>
          </div>
        </div>
        </section>
    );
};

export default addItem;