import Image from "next/image";
import pizza from '/public/images/pizza.png';

export default function MenuItem({image, title, description, price}){
    return(
        <div className="bg-fuchsia-100 border border-gray-400 hover:shadow-lg hover:shadow-black/25 hover:bg-fuchsia-200 cursor-pointer p-6 rounded-lg text-center transition-all">
                <div>
                  <Image className="rounded-lg w-3/5 mx-auto" placeholder="blur" src={image} alt="pizza"/>
                </div>
                <h4 className="text-2xl my-3">{title}</h4>
                <p className="text-gray-700 mb-3 text-sm">{description}</p>
                <button className="text-white hover:bg-fuchsia-800 my-2 bg-fuchsia-700 text-white py-3 px-6 rounded-full">Add To Cart ${price}</button>
        </div>

    )
}