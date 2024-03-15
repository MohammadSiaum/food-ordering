import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutBox = ({profileData, loading, totalPrice, cartProductsSize}) => {
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  useEffect(()=>{
    setEmail(profileData?.email);
    setContact(profileData?.contact);
    setStreetAddress(profileData?.streetAddress);
    setPostalCode(profileData?.postalCode);
    setCity(profileData?.city);
    setCountry(profileData?.country)

  } ,[profileData]);


    /* const {email, 
          contact, 
          streetAddress,
          postalCode,
          city,
          country,
        
        } = profileData; */

   if(loading) {
    return (
        <div className="text-center mt-7">
            <h2>Checkout loading...</h2>
        </div>
    )
   }
   function handlePaymentSubmit(ev){
     ev.preventDefault();
     toast.success('Payment successfull.');
   }
  
  return (
    <div className="bg-gray-100 p-9 rounded">
      <div className="mb-2">
        <h2 className="text-center font-semibold text-xl text-fuchsia-800">Checkout</h2>
      </div>
      <form onSubmit={handlePaymentSubmit} className="space-y-3">
        <div className="space-y-2">
          <label>
            <span className="block text-gray-700">Email</span>
          </label>
          <input
            name="email"
            value={email}
            readOnly
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
            value={contact}
            readOnly
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
            value={streetAddress}
            readOnly
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
              value={postalCode}
              readOnly
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
              value={city}
              readOnly
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
            value={country}
            readOnly
            className="block text-gray-700 text-md rounded w-full border border-gray-300 p-2 "
            type="country"
            placeholder="country"
          />
        </div>
        {cartProductsSize > 0 && (
          <div className="">
            <button
              type="submit"
              className="bg-fuchsia-700 hover:bg-fuchsia-800 transiton-all mt-5 justify-center w-full flex gap-4 text-white p-2 border border-fuchsia-700 rounded"
            >
              Pay ${totalPrice}
            </button>
         </div>

        )}
        
      </form>
    </div>
  );
};

export default CheckoutBox;
