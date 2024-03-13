import Image from "next/image";
import prod1 from '/public/images/prod1.jpg';
import prod2 from '/public/images/prod2.jpg';
import prod3 from '/public/images/prod3.jpg';
import { client } from "../../sanity/lib/client";

export const getProducts = async () =>{
     const res = await client.fetch(`*[_type == "category"]`);
     console.log(res);
     return res

}

interface IProdo {
    
}

export default async function Products() {

    const data = await getProducts();
    ;


  return (
    <div className="mt-20">
        {/* changed */}
        { data.map().title._type.price.image

        }
        <div className="items-center justify-center">
            <p className="flex text-sm font-bold leading-none text-blue-800  justify-center mt-20">PRODUCTS</p>
            <h2 className="flex justify-center text-black mt-5 text-4xl font-bold ">Check What We Have</h2>
        </div>

        <div className="flex space-x-12 mt-10 mx-24 max-w-auto w-full flex-grow">
            <div className=" hover:scale-110 shadow-md shadow-slate-500 group duration-500 flex-shrink-0">
                <Image src={prod1} width={350} height={350} alt="product1" />
                <p className="justify-center text-black mt-3 text-1xl font-bold text-center">Brushed Raglan Sweatshirt</p>
                <p className="justify-center font-bold text-center">$195</p>
               
            </div>
            
            <div className="  hover:scale-110 shadow-md shadow-slate-500 group duration-500 flex-shrink-0">
                <Image src={prod2} width={350} height={350} alt="tie dress"/>
                <p className="justify-center text-black text-1xl font-bold mt-3 text-center">Cameryn Sash Tie Dress</p>
                <p className="justify-center font-bold text-center">$545</p>
               
            </div>
            <div className=" hover:scale-110 shadow-md shadow-slate-500 group duration-500 flex-shrink-0">
                <Image src={prod3} width={350} height={350} alt="sweatshirt" />
                <p className="justify-center text-black mt-3 text-1xl font-bold text-center">Flex Sweatshirt</p>
                <p className="justify-center font-bold text-center">$175</p>
               
            </div>

            

        </div>

    </div>
  )
}
