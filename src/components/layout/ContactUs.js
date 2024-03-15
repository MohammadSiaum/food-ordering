import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import gulshan1 from "/public/images/Gulshan1.jpg";
import ContactCard from "../contact/ContactCard";

const ContactUs = () => {
  return (
    <section className="scroll-mt-24" id="contact">
      <SectionHeader subHeader={"Don't Hesitate"} mainHeader={"Contact us"} />
      <h4 className="max-w-2xl mt-10 mx-auto text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi reiciendis pariatur ullam quos voluptatum, alias ipsam necessitatibus ducimus quis maiores laborum blanditiis suscipit aperiam iste facilis? Impedit, ut consectetur!</h4>
      <div className="grid grid-cols-4 gap-9 mt-16 text-gray-700">
        <ContactCard image={gulshan1}/>
        <ContactCard image={gulshan1}/>
        <ContactCard image={gulshan1}/>
        <ContactCard image={gulshan1}/>

      </div>
    </section>
  );
};

export default ContactUs;
