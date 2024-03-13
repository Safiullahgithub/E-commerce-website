import Image from "next/image"
import dif from '/public/images/dif.jpg';


export const Difference = () => {
  return (
    <div className="mx-20 my-32">
        <div className="flex">
            <div className="maw-w-screen-md w-full">

            </div>
            <div>
                <p className="flex justify-end font-semibold text-black text-5xl mx-7">Unique and Authentic Vintage Designer Jewellery</p>

            </div>
        </div>
        <div className="mt-10 flex">
            {/* right side */}
            <div className="">
                <div className="flex  max-w-md w-full mx-10">
                    <div className=" max-w-md w-full text-black">
                        <p className="text-lg font-semibold text-justify ">Using Good Quality Materials</p>
                        <p className=" text-sm mt-3">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>

                    <div className=" max-w-md w-full mx-16 text-black">
                        <p className="text-lg font-semibold text-justify ">100% Handmade Products</p>
                        <p className=" text-sm mt-3">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>

                </div>

                <div className="flex max-w-md w-full mt-14 mx-10">
                    <div className=" max-w-md w-full text-black">
                        <p className="text-lg font-semibold text-justify ">Modern Fashion Design</p>
                        <p className=" text-sm mt-3">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>

                    <div className=" max-w-md w-full mx-16 text-black">
                        <p className="text-lg font-semibold text-justify ">Discount for Bulk Orders</p>
                        <p className=" text-sm mt-3">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>

                </div>

            </div>
            {/* left side */}
            <div className="flex  w-1/2 space-x-10">
                <div className=" max-w-lg w-full">
                    <Image src={dif} width={600} height={600} alt="product"/>
                </div>
                <div className=" flex-col max-w-lg w-full px-5 items-center justify-center py-10">
                    <p className=" text-center items-center text-base">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                    <button className="w-32 h-10  bg-black text-white hover:bg-slate-700 mt-10 items-center justify-center">See All Products</button>
                </div>
            </div>
        </div>
        

    </div>
  )
}
