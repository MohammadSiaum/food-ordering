"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserForm from "../../components/layout/UserForm";

export default function ProfilePage() {
  const session = useSession();

  const { status } = session;
  const userImage = session?.data?.user?.image;
  const userEmail = session?.data?.user?.email;

  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});

  const [profileSaved, setProfileSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUpload, setIsUpload] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    if (status === "authenticated") {
      setIsLoading(true);
      // setUserName(session?.data?.user?.name);
      // setProfileImage(session?.data?.user?.image);
      // if (imageUrl) {
      //   setProfileImage(imageUrl);
      // }
      fetch("../api/profile")
        .then((res) => res.json())
        .then((data) => {
         
          setUser(data);
          setIsLoading(false);
        });
    }
  }, [status]);

  async function handleProfileUpdate(event, data) {
    event.preventDefault();
    setProfileSaved(false);
    setIsSaving(true);
    

    const savingPromise = new Promise(async (resolve, rejects) => {
      const response = await fetch("../api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({data}),
      });
      setIsSaving(false);

      if (response.ok) {
        setProfileSaved(true);
        resolve();
      } else {
        rejects();
      }
    });

    toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Saved profile",
      error: "Error...!",
    });

    /* const profileInfo = {
      userName,
      email,
      contact,
      address,
      postalCode,
      city,
      country,
    }; */


    // console.log(profileInfo);
  }

  // upload image --> 3:43:53 (video)
  async function handleFileChange(event) {
    const file = event.target.files?.[0];

    // if (!file) {
    //   return;
    // }

    // console.log(event.target.files)
    // const files = event.target.files;
    // if (files?.length >= 1) {
    //   const data = new FormData;
    //   data.set('file', files[0]);
    //   await fetch('../api/upload', {
    //     method: 'POST',
    //     body: data,
    //     // headers: {'Content-Type': 'multipart/form-data'}

    //   });
    //   // const link = await response.json();
    //   // setProfileImage(link);
    // }
  }

  if (status === "loading" || isLoading) {
    return (
      <div className="text-center mt-32">
        <h2>Loading...</h2>
      </div>
    )
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <section className="mt-20">
      <UserForm onSave={handleProfileUpdate} user={user} isSaving={isSaving} isUpload={isUpload} profileSaved={profileSaved} profileTitle={'Profile'} />
    </section>
  );
}
