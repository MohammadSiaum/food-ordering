"use client";
import React, { useEffect, useState } from "react";
import { useProfile } from "../../../components/UserProfile";
import toast from "react-hot-toast";

const categoriesPage = () => {
  const { loading, data } = useProfile();
  const [categoryName, setCategoryName] = useState('');
  const [editedCategory, setEditedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
      
  }, [])

  function fetchCategories() {
    fetch('../api/categories')
      .then(res => res.json())
      .then(data =>{
         setCategories(data);
      })
  }

  async function handleCategorySubmit(event) {
    event.preventDefault();
    // console.log(newCategoryName);
    const creationPromise = new Promise (async(resolve, reject) => {
        const categoryData = {name: categoryName}
        if (editedCategory) {
          categoryData._id = editedCategory._id;
        }
        const response = await fetch('../api/categories', {
            method: editedCategory ? 'PUT' : 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(categoryData)
      });
      setCategoryName('');
      setEditedCategory(null);
      fetchCategories();
      
      if (response.ok) {
        resolve();
      }
      else {
        reject();
      }
    });

    toast.promise(creationPromise, {
        loading: editedCategory 
           ? 'Updating caregory...' 
           : 'Creating new category...',
        success: editedCategory 
           ? 'Updated category' 
           : 'Created category successful',
        error: 'Error, something is wrong !'
    })
    

  }

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!data.admin) {
    return "Not admin !";
  }
  return (
    <section>
      <div className="max-w-xl ml-20 border rounded p-10">
        <h2 className="text-center mb-9 text-2xl text-fuchsia-700">Categories</h2>

        <form onSubmit={handleCategorySubmit} className="flex gap-7 items-end">
          <div className="space-y-3">
            <label>
             {
               editedCategory 
                 ? <h3 className="text-lg text-gray-700">Update category : {categoryName}</h3> 
                 : <h3 className="text-lg text-gray-700">New category name :</h3>
             }
            </label>
            <input
               type="text"
               value={categoryName}
               onChange={(ev)=>setCategoryName(ev.target.value)}
               className="block outline-fuchsia-500 text-gray-700 text-md rounded w-full border border-gray-300 p-2 \"
               
            />
          </div>
          <div>
          <button
                  type="submit"
                  className="bg-fuchsia-700 hover:bg-fuchsia-800 transiton-all mt-7 justify-center w-full flex gap-4 text-white p-2 px-4 border border-fuchsia-700 rounded"
                >
                  {
                    editedCategory ? <>Update</> : <>Create</>
                  }
                </button>
          </div>
        </form>
        <div className="mt-14">
          {
            categories?.length ?
              <div>
                 <h2 className="text-lg text-gray-700">Edit Categories :</h2>
                 <div className="space-y-4 mt-5">
                   {
                     categories.map(c => 
                       <button 
                          key={c._id}
                          onClick={()=> {
                             setEditedCategory(c);
                             setCategoryName(c.name);
                            
                            }}
                          className="bg-gray-200 text-start w-full p-2 rounded"
                         
                         >
                          <span>{c.name}</span>
                       </button>
                     )
                   }
                 </div>
              </div>
              :
              <>
                <h2 className="text-lg text-gray-700">No Categories available</h2>
              </>
          }
          
        </div>
      </div>
    </section>
  );
};

export default categoriesPage;
