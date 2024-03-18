'use client'

import React, { useState } from 'react';
import  {useProfile}  from "../../../../components/UserProfile";
import { UploadButton } from '@uploadthing/react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';
import MenuItemForm from '../../../../components/layout/MenuItemForm';
import { redirect } from 'next/navigation';


const AddItem = () => {
  const { loading, data } = useProfile();
  const [redirectToItems, setRedirectToItems] = useState(false);


  async function handleItemSave(event, data) {
    event.preventDefault()
    setRedirectToItems(false);
    // console.log(image, itemName, itemDescrip, itemPrice);
    
    const savingPromise = new Promise(async(resolve, reject)=> {
      const response = await fetch('../../api/menu-items', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      });

      if(response.ok) {
        resolve();
        setRedirectToItems(true);
      }

      else {
        reject();
      }

    });

    // console.log(event.target.value.reset());
    await toast.promise(savingPromise, {
       loading: 'Saving this tasty item...',
       success: 'Saved tasty item.',
       error: 'Error, something was wrong !'
    })
    
  }

  if (redirectToItems) {
    return redirect('/dashboard/menu-items');
  }

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h2>Loading...</h2>
      </div>
    );
  }

    return (
        <section className=''>
            <div className='max-w-xl ml-20 flex justify-end pb-5'>
               <Link 
              href={'/dashboard/menu-items/view-items'} 
              className='bg-purple-600 p-1 text-white rounded px-3'
               >view all items</Link>
            </div>

            <div className='max-w-xl ml-20 p-10 rounded border border-gray-300'>
              <h2 className='mb-9 text-center text-fuchsia-700 text-2xl'>Add Item</h2>

              <MenuItemForm onSubmit={handleItemSave} buttomName={'Add Item'} />

            </div>
        </section>
    );
};

export default AddItem;