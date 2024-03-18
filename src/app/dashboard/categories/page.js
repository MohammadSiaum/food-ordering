"use client";
import React, { useEffect, useState } from "react";
import { useProfile } from "../../../components/UserProfile";
import toast from "react-hot-toast";
import DeleteIcon from "../../../components/icons/DeleteIcon";
import EditIcon from "../../../components/icons/EditIcon";
import DeleteButton from "../../../components/DeleteButton";

const CategoriesPage = () => {
  const { loading, data } = useProfile();
  const [categoryName, setCategoryName] = useState("");
  const [editedCategory, setEditedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  const caterogyLabel = <>

    <div
        className="bg-red-500 text-white hover:bg-red-600 p-2 rounded-full mr-3">
        <DeleteIcon className="w-6 h-6" />
    </div>
  
  </>

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    fetch("../api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }

  async function handleCategorySubmit(event) {
    event.preventDefault();
    // console.log(newCategoryName);
    const creationPromise = new Promise(async (resolve, reject) => {
      const categoryData = { name: categoryName };
      if (editedCategory) {
        categoryData._id = editedCategory._id;
      }
      const response = await fetch("../api/categories", {
        method: editedCategory ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categoryData),
      });
      setCategoryName("");
      setEditedCategory(null);
      fetchCategories();

      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    toast.promise(creationPromise, {
      loading: editedCategory
        ? "Updating caregory..."
        : "Creating new category...",
      success: editedCategory
        ? "Updated category"
        : "Created category successful",
      error: "Error, something is wrong !",
    });
  }

  async function handleCategoryDelete(_id) {
    const promiseDelete = new Promise(async (resolve, reject) => {
      const response = await fetch('../api/categories?_id='+_id, {
        method: 'DELETE',
  
      });

      if(response.ok) {
        resolve();
      }
      else {
        reject();
      }

      toast.promise(promiseDelete, {
        loading: 'Deleting category...',
        success: 'Deleted successful.',
        error: 'Error! something was wrong.'
      })

      fetchCategories();

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
      <div className="max-w-2xl ml-10 border rounded p-10">
        <h2 className="text-center mb-9 text-2xl text-fuchsia-700">
          Categories
        </h2>

        <form onSubmit={handleCategorySubmit} className="flex gap-9  items-end">
          <div className="space-y-3">
            <label>
              {editedCategory ? (
                <h3 className="text-lg text-gray-700">
                  Update category : {categoryName}
                </h3>
              ) : (
                <h3 className="text-lg text-gray-700">New category name :</h3>
              )}
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(ev) => setCategoryName(ev.target.value)}
              className="block outline-fuchsia-500 text-gray-700 text-md rounded w-full border border-gray-300 p-2"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-fuchsia-700 hover:bg-fuchsia-800 transiton-all mt-7 justify-center w-full flex gap-4 text-white p-2 px-4 border border-fuchsia-700 rounded"
              
            >
              {editedCategory ? <span>Update</span> : <span>Create</span>}
            </button>
          </div>
          <div>
            <button
               type="button"
               onClick={() => {
                 setEditedCategory(null);
                 setCategoryName('');
               }}
               className="bg-gray-700 hover:bg-gray-800 transiton-all mt-7 justify-center w-full flex gap-4 text-white p-2 px-6 border border-gray-300 rounded"
            
              >Clear</button>
          </div>
        </form>
        <div className="mt-9">
          {categories?.length ? (
            <div>
              <h2 className="text-lg text-gray-700">Existing categories :</h2>
              <div className="space-y-4 mt-5">
                {categories.map((c) => (
                  <>
                    <div key={c._id} className="w-full">
                      <h2 className="w-full h-px bg-gray-300 font-semibold">
                        {" "}
                      </h2>
                      <div className="bg-gray-50 py-3 flex justify-item justify-between">
                        <span
                          onClick={() => {
                            setEditedCategory(c);
                            setCategoryName(c.name);
                          }}
                          className="ml-4 items-center flex hover:underline cursor-pointer"
                        >
                          {c.name}
                        </span>

                        <div className="flex justify-item gap-14">
                          <button 
                              onClick={() => {
                                setEditedCategory(c);
                                setCategoryName(c.name);
                              }}
                              className="bg-purple-200 hover:bg-purple-300 border p-2 border-gray-300 rounded">
                            <EditIcon className="w-5 h-5" />
                          </button>
                          <DeleteButton label={caterogyLabel} onDelete={ ()=>handleCategoryDelete(c._id)} />

                          {/* <button 
                              onClick={() => handleCategoryDelete(c._id)}
                              className="bg-red-500 text-white hover:bg-red-600 p-2 rounded-full mr-3">
                            <DeleteIcon className="w-6 h-5" />
                          </button> */}
                        </div>
                      </div>
                      <h2 className="w-full h-px bg-gray-300 font-semibold">
                        {" "}
                      </h2>
                    </div>
                  </>
                ))}
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-lg text-gray-700">No Categories available</h2>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
