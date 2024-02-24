"use client";

import InfoBox from "../../components/layout/InfoBox";
// import UserTabs from "../../components/layout/UserTabs";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useUploadThing } from "../../utils/uploadthing";
import { UploadButton } from "@uploadthing/react";
import toast from "react-hot-toast";

export default function profilePage() {
  const session = useSession();

  const { status } = session;
  const userImage = session?.data?.user?.image;
  const userEmail = session?.data?.user?.email;

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [profileSaved, setProfileSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoading(true);
      setUserName(session?.data?.user?.name);
      setProfileImage(session?.data?.user?.image);
      if (imageUrl) {
        setProfileImage(imageUrl);
      }
      fetch("../api/profile")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserData(data);
          setEmail(data?.email);
          setContact(data?.contact);
          setStreetAddress(data?.streetAddress);
          setPostalCode(data?.postalCode);
          setCity(data?.city);
          setCountry(data?.country);
          setIsAdmin(data?.admin);
          setIsLoading(false);
        });
    }
  }, [session, status, imageUrl]);

  async function handleProfileUpdate(event) {
    event.preventDefault();
    setProfileSaved(false);
    setIsSaving(true);
    /* const email = event.target.email.value;
    const phone = event.target.phone.value;
    const streetAddress = event.target.streetAddress.value;
    const postalCode = event.target.postalCode.value;
    const city = event.target.city.value;
    const country = event.target.country.value; */

    const savingPromise = new Promise(async (resolve, rejects) => {
      const response = await fetch("../api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,
          email,
          image: profileImage,
          streetAddress,
          contact,
          postalCode,
          city,
          country,
        }),
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
    <section className="">
      <div className="mt-16 border shadow-sm shadow-black/25 border-gray-300 rounded-md p-5 py-9 max-w-lg mx-auto">
        <h1 className="text-3xl mb-5 text-fuchsia-700 text-center">Profile</h1>
        {profileSaved && (
          <h2 className="text-center mb-5 p-2 bg-green-100 rounded border-2 border-green-300">
            Profile saved
          </h2>
        )}

        {isSaving && <InfoBox>Saving...</InfoBox>}

        {isUpload && <InfoBox>Uploading photo...</InfoBox>}

        <div className="flex gap-2">
          <div className="w-60">
            <div className="mb-5">
              <Image
                className="rounded"
                src={profileImage}
                width={100}
                height={100}
                alt="pizza-guru"
              />
            </div>
            <div>
              <UploadButton
                className="ut-button:w-24 ut-button:rounded mr-4 ut-button:text-sm"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // setIsUpload(true)
                  setImageUrl(res[0].url);
                  toast.success("Upload complete");
                  // Do something with the response
                  // console.log("Files: ", res[0].url);
                  // setIsUpload(false);
                }}
                onUploadError={(error) => {
                  // Do something with the error.
                  // alert(`ERROR! ${error.message}`);
                  toast.error(`${error.message}`);
                }}
              />
            </div>

            {/* <label className="">
            <input type="file" className="hidden" onChange={handleFileChange}/>
            <span className="cursor-pointer p-2 text-center border border-gray-300 bg-gray-100 text-gray-800 rounded-md">
              Edit photo
            </span>
          </label> */}
          </div>
          <form onSubmit={handleProfileUpdate} className="">
            <div className="space-y-4">
              <div className="space-y-2">
                <label>
                  <span className="block text-gray-700">Full name</span>
                </label>
                <input
                  onChange={(ev) => setUserName(ev.target.value)}
                  name="name"
                  value={userName}
                  className="block text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
                  type="text"
                  placeholder="name"
                />
              </div>
              <div className="space-y-2">
                <label>
                  <span className="block text-gray-700">Email</span>
                </label>
                <input
                  name="email"
                  value={userEmail}
                  readOnly
                  disabled
                  className="block text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="space-y-2">
                <label>
                  <span className="block text-gray-700">Phone number</span>
                </label>
                <input
                  name="phone"
                  onChange={(ev) => setContact(ev.target.value)}
                  value={contact}
                  className="block text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
                  type="phone-number"
                  placeholder="phone number"
                />
              </div>
              <div className="space-y-2">
                <label>
                  <span className="block text-gray-700">Street address</span>
                </label>
                <input
                  name="streetAddress"
                  onChange={(ev) => setStreetAddress(ev.target.value)}
                  value={streetAddress}
                  className="block text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
                  type="text"
                  placeholder="street address"
                />
              </div>
              <div className="grid grid-cols-2 gap-9">
                <div className="space-y-2">
                  <label>
                    <span className="block text-gray-700">Post code</span>
                  </label>
                  <input
                    name="postalCode"
                    onChange={(ev) => setPostalCode(ev.target.value)}
                    value={postalCode}
                    className="block text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
                    type="post-code"
                    placeholder="post code"
                  />
                </div>

                <div className="space-y-2">
                  <label>
                    <span className="block text-gray-700">City name</span>
                  </label>
                  <input
                    name="city"
                    onChange={(ev) => setCity(ev.target.value)}
                    value={city}
                    className="block text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
                    type="city"
                    placeholder="city name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label>
                  <span className="block text-gray-700">Country name</span>
                </label>
                <input
                  name="country"
                  onChange={(ev) => setCountry(ev.target.value)}
                  value={country}
                  className="block text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
                  type="country"
                  placeholder="country"
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-fuchsia-700 hover:bg-fuchsia-800 transiton-all mt-7 justify-center w-full flex gap-4 text-white p-2 border border-fuchsia-700 rounded"
                >
                  Save profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
