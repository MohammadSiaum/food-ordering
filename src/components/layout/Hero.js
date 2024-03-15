
import Image from "next/image"
import pizza from "/public/images/pizza.png"
import RightLong from "../icons/RightILong"
import RightCircle from "../icons/RightCircle"
export default function Hero() {
    return (
        <section className="grid grid-cols-2">
            <div className="mt-28">
               <h1 className="text-5xl leading-tight text-gray-800 font-semibold">Everything<br/>
               is better<br/>
               with a <span className="text-fuchsia-700">Pizza</span></h1>
               <p className="my-7 text-gray-700">Pizza is the missing piece that makes every day <br/>
               complete, a simple yet delicious joy in life
               </p>
               <div className="flex gap-4">
                  <button className="flex gap-2  bg-fuchsia-700 hover:bg-fuchsia-800 text-white py-2 px-4 rounded">
                    Order Now
                    <RightLong/>
                  </button>
                  <button className="flex gap-2 bg-gray-700 hover:bg-gray-800 text-white py-2 px-3 rounded">
                    Learn more
                    <RightCircle/>
                  </button>
               </div>
            </div>
            <div className="mt-5  w-11/12 rounded-lg">
               <Image src={pizza} placeholder="blur" alt="pizza-ten"></Image>
            </div>
        </section>
    )
}