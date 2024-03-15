'use client'

import { UploadButton } from "@uploadthing/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import ProfileIcon from "../icons/ProfileIcon";
import toast from "react-hot-toast";
import { useProfile } from "../UserProfile";

const UserForm = ({onSave, user, isSaving, isUpload, profileSaved, profileTitle}) => {
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [email, setEmail] = useState(user?.email || "");
  const [contact, setContact] = useState(user?.contact || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [admin, setAdmin] = useState(user?.admin || false);
  const { data:loggedInUserData } = useProfile();


  const data = {
    name,
    image,
    email,
    contact,
    streetAddress,
    postalCode,
    city,
    country,
    admin
  }

  
  // console.log(user)



  return (
    <div className=" border shadow-sm shadow-black/25 border-gray-300 rounded-md p-9 py-11 max-w-xl mx-auto">
      <div className="text-3xl flex items-center gap-3 justify-center mb-9 text-fuchsia-700 text-center">
        <ProfileIcon className="w-9 h-8 font-semibold" />
        <h1>{profileTitle}</h1>
      </div>

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
            {
              image ?
                <Image
                className="rounded"
                src={image}
                width={100}
                height={100}
                alt="pizza-guru"
                />
                 :
                 <div className="w-24 h-24 p-5 border border-gray-400 rounded   text-center bg-gray-200">
                   No photo
                </div>
            }

            
          </div>
          <div>
            <UploadButton
              className="ut-button:w-24 ut-button:rounded mr-7 ut-button:text-sm"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImage(res[0].url);
                toast.success("Upload complete");
              }}
              onUploadError={(error) => {
                toast.error(`${error.message}`);
              }}
            />
          </div>
        </div>
        <form onSubmit={ev => onSave(ev, data)} className="">
          <div className="space-y-4">
            <div className="space-y-2">
              <label>
                <span className="block text-gray-700">Full name</span>
              </label>
              <input
                onChange={(ev) => setName(ev.target.value)}
                name="name"
                value={name}
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
                value={email}
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
            
            {loggedInUserData.admin && (
              <div>
              <label className="p-1 inline-flex items-center gap-2" htmlFor="adminCbox">
                <>
                 {loggedInUserData?.email === user?.email 
                   ? <input 
                     id="adminCbox" type="checkbox" className=" cursor-not-allowed"
                     value={'1'}
                     checked={admin}     
                     />

                   : <input 
                     id="adminCbox" type="checkbox" 
                     value={'1'}
                     checked={admin}
                     onClick={ev => setAdmin(ev.target.checked)}     
                    />
                      
                 }
                </>
                
                <span className="text-gray-700">Admin</span>
              </label>
            </div>
            )}
            
            <div className="">
              <button
                type="submit"
                className="bg-fuchsia-700 hover:bg-fuchsia-800 transiton-all mt-5 justify-center w-full flex gap-4 text-white p-2 border border-fuchsia-700 rounded"
              >
                Save profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
