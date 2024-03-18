"use client";

import { useEffect, useState } from "react";
import { useProfile } from "../../../components/UserProfile";
import DeleteButton from "../../../components/DeleteButton";
import DeleteIcon from "../../../components/icons/DeleteIcon";
import UserGroupIcon from "../../../components/icons/UserGroupIcon";
import Link from "next/link";
import EditIcon from "../../../components/icons/EditIcon";
import toast from "react-hot-toast";

const UsersPage = () => {
  const { loading, data } = useProfile();
  const [users, setUsers] = useState([]);

  const userLabel = (
    <>
      <div className="bg-red-500 text-white hover:bg-red-600 p-2 rounded-full ">
        <DeleteIcon className="w-6 h-6" />
      </div>
    </>
  );
  useEffect(() => {
    fetchUsers();
  }, []);

  function fetchUsers () {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    

  }

  function handleDeleteUser (id) {
    // const selectedUsers = users.filter(user => user._id !== id);
    // setUsers(selectedUsers);

    const deletePromise = new Promise(async (resolve, reject) => {
      
      const response = await fetch("/api/users?_id=" + id, {
        method: "DELETE",
      });
      fetchUsers();
      

      if (response.ok) {
        
        resolve();
      } else {
        reject();
      }
    });

    toast.promise(deletePromise, {
      loading: "Deleting user",
      success: "Delete user",
      error: "Error, something is wrong !",
    });
    
  }

  // console.log(users);

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h2>Loading users info..</h2>
      </div>
    );
  }

  if (!data.admin) {
    return "Not admin !";
  }

  return (
    <div className="max-w-3xl ml-10 border rounded p-10">
      <div className="flex item-center justify-center gap-4 text-fuchsia-700 text-2xl">
        <UserGroupIcon className="w-8 h-8" />
        <h2 className=" text-fuchsia-700 text-2xl">Users List</h2>
      </div>

      <div className="grid grid-cols-4 gap-9 bg-purple-300 p-3 text-gray-800 mt-11">
        <div className="col-span-3">
          <div className="grid grid-cols-2">
           <span>Name</span>
           <span className="">Email</span>
          </div>
        </div>

        <div className="flex justify-between">
           <span>Edit</span>
           <span>Action</span>
        </div>
        
      </div>
      <div className="space-y-4 mt-7">
        {users?.length > 0 &&
          users.map((u) => (
            <div key={u._id}>
              <h2 className="w-full h-px bg-gray-300 font-semibold"> </h2>
              <div className="bg-gray-50 grid grid-cols-4 p-3 items-center gap-9">
                <div className="col-span-3">
                  <div className="grid grid-cols-2">
                    <span>{u.name}</span>
                     <span className="italic text-gray-600">{u.email}</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Link
                    className="bg-purple-200 hover:bg-purple-300 border p-2 border-gray-300 rounded-lg"
                    href={"/dashboard/users/"+u._id}
                  >
                    <EditIcon />
                  </Link>

                  <DeleteButton
                    label={userLabel}
                    onDelete={() => handleDeleteUser(u._id)}
                  />
                </div>
              </div>

              <h2 className="w-full h-px bg-gray-300 font-semibold"> </h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UsersPage;
