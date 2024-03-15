'use client';

import Image from "next/image";

import salad1 from "/public/images/sallad1.png";
import salad2 from "/public/images/sallad2.png";
import pizza_pepperoni from "/public/images/pizza_pepperoni.jpg";
import pizza from "/public/images/pizza.png";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";
import { useEffect, useState } from "react";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(()=> {
     fetch('/api/menu-items')
       .then(res => res.json())
       .then(menuItems => {
          setBestSellers(menuItems.slice(-6));
       })
  }, [])

  // console.log(bestSellers)


  return (
    <section className="">
      <div className="grid grid-cols-3 gap-4 ">
        <div className=" -z-10">
          <Image src={salad1} width={130} placeholder="blur" alt="pizza-ten" />
        </div>
        <div className="text-center place-self-center space-y-2">
          <SectionHeader subHeader={"Check Out"} mainHeader={"Best sellers"} />
        </div>
        <div className="-z-10 -top-[20px] place-self-end">
          <Image src={salad2} width={125} placeholder="blur" alt="pizza-ten" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-9 my-10">
        {bestSellers?.length > 0 && bestSellers.map(item => (
          <MenuItem 
            key={item._id}
            item={item}
           />
        ))}
         
      </div>
    </section>
  );
}
