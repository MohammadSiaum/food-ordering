import Image from "next/image";

import salad1 from "/public/images/sallad1.png";
import salad2 from "/public/images/sallad2.png";
import pizza_pepperoni from "/public/images/pizza_pepperoni.jpg";
import pizza from "/public/images/pizza.png";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="grid grid-cols-3 gap-4 ">
        <div className=" -z-10">
          <Image src={salad1} width={130} placeholder="blur" alt="pizza-ten" />
        </div>
        <div className="text-center place-self-center space-y-2">
          <SectionHeader subHeader={"Check Out"} mainHeader={"Menu"} />
        </div>
        <div className="-z-10 -top-[20px] place-self-end">
          <Image src={salad2} width={125} placeholder="blur" alt="pizza-ten" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-9 my-10">
        <MenuItem
          image={pizza}
          title={"Pepperoni Pizza"}
          description={
            "This pepperoni pizza recipe produces a classic! Delicious homemade pizza crust and tomato sauce have never been easier."
          }
          price={"23"}
        />
        <MenuItem
          image={pizza}
          title={"Pepperoni Pizza"}
          description={
            "This pepperoni pizza recipe produces a classic! Delicious homemade pizza crust and tomato sauce have never been easier."
          }
          price={"27"}
        />
        <MenuItem
          image={pizza}
          title={"Pepperoni Pizza"}
          description={
            "This pepperoni pizza recipe produces a classic! Delicious homemade pizza crust and tomato sauce have never been easier."
          }
          price={"20"}
        />

        <MenuItem
          image={pizza}
          title={"Pepperoni Pizza"}
          description={
            "This pepperoni pizza recipe produces a classic! Delicious homemade pizza crust and tomato sauce have never been easier."
          }
          price={"33"}
        />
        <MenuItem
          image={pizza}
          title={"Pepperoni Pizza"}
          description={
            "This pepperoni pizza recipe produces a classic! Delicious homemade pizza crust and tomato sauce have never been easier."
          }
          price={"29"}
        />
        <MenuItem
          image={pizza}
          title={"Pepperoni Pizza"}
          description={
            "This pepperoni pizza recipe produces a classic! Delicious homemade pizza crust and tomato sauce have never been easier."
          }
          price={"30"}
        />
      </div>
    </section>
  );
}
