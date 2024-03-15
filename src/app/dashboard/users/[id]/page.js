"use client";

import React, { useEffect, useState } from "react";
import { useProfile } from "../../../../components/UserProfile";
import { useParams } from "next/navigation";
import UserForm from "../../../../components/layout/UserForm";
import Link from "next/link";
import toast from "react-hot-toast";

const EditUserPage = () => {
  const { loading, data } = useProfile();
  const [user, setUser] = useState(null);

  const [profileSaved, setProfileSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();

  let profileShotName = user?.name;
  if(profileShotName && profileShotName?.includes(' ')) {
    profileShotName = profileShotName.split(' ')[0];

  }
  const profileTitle = profileShotName+"'s" +' profile';


  useEffect(()=> {
    setIsLoading(true);

    /* fetch('../../../api/users')
       .then(res => res.json())
       .then(users => {
          const user = users.find(u => u._id === id);
          // setUser(user);
          setIsLoading(false);

       }) */

    fetch('../../../api/profile?_id='+id)
      .then(res => res.json())
      .then(user => {
        setUser(user)
        // console.log(user);
        setIsLoading(false);

      })

  }, [id])


  async function handleProfileUpdate(ev, data) {
    ev.preventDefault();
    setProfileSaved(false);
    setIsSaving(true);

    const updatingPromise = new Promise(async (resolve, rejects) => {
      const response = await fetch('../../../api/profile', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data, _id:id})
  
      });
      setIsSaving(false);
      if(response.ok) {
        setProfileSaved(true);
        resolve();
      }
      else {
        rejects();
      }

    });

    toast.promise(updatingPromise, {
      loading: "Saving user...",
      success: "Saved user",
      error: "Saved error...!",
    });
    
    
  }




  if (loading || isLoading) {
    return (
      <div className="text-center mt-20">
        <h2>Loading user..</h2>
      </div>
    );
  }

  if (!data.admin) {
     return (
      <div className="text-center mt-20">
        <h2>You are not Admin..</h2>
      </div>
     )

  }
  return (
    <section className="">
      <div className="max-w-xl mx-auto flex justify-end pb-5">
        <Link
          href={"/dashboard/users"}
          className="bg-purple-600 hover:bg-purple-700 p-1 text-white rounded px-3"
        >
          view all users
        </Link>
      </div>
      <UserForm onSave={handleProfileUpdate} user={user} isSaving={isSaving} isUpload={isUpload} profileSaved={profileSaved} profileTitle={profileTitle} />
    </section>
  );
};

export default EditUserPage;
