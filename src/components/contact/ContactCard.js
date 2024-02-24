import Image from "next/image";
import React from "react";

const ContactCard = ({image}) => {
  return (
    <div className="space-y-3 p-5 rounded border border-gray-400 bg-gradient-to-t from-fuchsia-200 to-red-200 hover:shadow-lg hover:shadow-black/25 hover:from-fuchsia-300 hover:to-red-300 cursor-pointer p-6 rounded-lg transition-all">
      <div className="text-center mb-4">
        <Image className="rounded" src={image} alt="pizza-guru" />
      </div>
      <h3 className="text-gray-900 my-4 text-xl">Gushan Branch</h3>
      <div className="">
        <h4>Mohammad Siam</h4>
        <h4>Contact : 01645452599</h4>
        <h4>Address : Gulshan, Dhaka</h4>
      </div>
    </div>
  );
};

export default ContactCard;
