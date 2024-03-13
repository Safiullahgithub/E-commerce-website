import Image from "next/image";
import prom1 from '/public/images/prom1.jpg'
import prom3 from '/public/images/prom3.jpg'
import prom4 from '/public/images/prom4.jpg'


export default function Promotion() {
  return (
    <div className=" mx-24">
        {/* -----------------using flex------------- */}

        {/* <div className="itmes-center content-center">
            <p className="flex text-sm font-bold leading-none text-blue-800  justify-center mt-20">PROMOTIONS</p>
            <h2 className="flex justify-center text-black mt-5 text-4xl font-bold ">Our Promotions Events</h2>
        </div>
        <div className="flex flex-col justify-between mt-10 md:flex-row lg:flex ">
            <div className="flex-grow-0">
                <div className="flex w-full max-w-screen-sm  h-48 bg-gray-300 jutify-between items-center shadow-md shadow-slate-500 flex-shrink-0">
                    <div className="max-w-sm w-full px-10">
                    <h1 className="text-black text-center text-2xl   justify-center font-bold"> GET UP TO <span>60%</span> </h1>
                    <p className="justify-center text-center">For the summer season</p>
                    </div>
                    <div className="max-w-sm w-full">
                    <Image width={250} height={250} src={prom1} alt="image" />
                    </div>

                </div>
                <div className="flex w-full max-w-screen-sm  h-36 bg-black items-center text-white mt-5 shadow-md shadow-slate-500 flex-shrink-0">
                    <div className="justify-center items-center text-center px-56">
                    <h3 className=" text-center text-2xl   flex justify-center font-bold w-60 h-5">GET 30% OFF</h3>
                    <p className="justify-center text-center text-xs w-60 mt-5">USE PROMOCODE</p>
                    <button className="justify-center w-60  h-10 mt-5 bg-slate-600 rounded-sm">DINEWEEKENDSALE</button>
                    </div>

                </div>


            </div>
            <div className="flex px-3 sm:gap-x-5 md:gap-x-0 lg:gap-x-0 sm:mt-10 lg:mt-0 md:mt-0">
                <div className="flex flex-col h-110 max-w-sm w-full bg-orange-100 shadow-md shadow-slate-500 flex-shrink-0 flex-grow-0">
                    <div className=" items-center mt-5">
                        <p className="justify-start px-8 text-xs">Flex Sweatshirt</p>
                        <p className="px-8 mt-2 mb-2"><span className="line-through">$100.00</span> <span className="font-bold px-1">$75.00</span></p>

                    </div>
                    <div>
                        <Image className="mt-6" src={prom3} width={250} height={250} alt="shirt image" />
                    </div>

                </div>
                <div className="px-5">
                <div className="flex flex-col h-110 max-w-sm w-full bg-gray-300 shadow-md shadow-slate-500 flex-shrink-0 flex-grow-0">
                    <div className=" items-center mt-5">
                        <p className="justify-start px-8 text-xs">Flex Push Button Bomber</p>
                        <p className="px-8 mt-2"><span className="line-through">$225.00</span> <span className="font-bold px-1">$190.00</span></p>

                    </div>
                    <div>
                        <Image className="mt-12 sm:mt-6" src={prom4} width={250} height={250} alt="shirt image" />
                    </div>

                </div>

                </div>
            </div>
        </div> */}
 {/* -----------------using grid ------------- */}
<p className="flex text-sm font-bold leading-none text-blue-800  justify-center mt-20">PROMOTIONS</p>
            <h2 className="flex justify-center text-black mt-5 text-4xl font-bold ">Our Promotions Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full mt-10">
        <div className="sm:col-span-2 space-y-2">
          <div className=" bg-[#d6d6d8]  flex justify-center items-center px-5">
            <div>
            <h1 className="text-black text-center font-semibold justify-center"> GET UP TO <span>60%</span> </h1>
              <p className="text-center">For the summer season</p>
            </div>
            <Image src={prom1} alt="" width={226} height={226} />
          </div>
          <div className="flex flex-col items-center justify-center  bg-[#212121] h-48 py-5 text-center text-white">
            <h3>GET 30% Off</h3>
            <p className="text-xs">USE PROMO CODE</p>
            <button className="bg-[#474747] px-8 py-3 tracking-widest text-white text-xs mt-1">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className=" bg-[#efe1c7] row-span-2">
          <div className="p-5">
            <p>Flex Sweatshirt</p>
            <p className="text-base">
              <span className="line-through text-sm mr-1">$100.00</span> $75.00
            </p>
          </div>
          <Image
            alt=""
            src={prom3}
            width={220}
            height={220}
            className="mx-auto"
          />
        </div>
        <div className=" bg-[#d7d7d9]">
          <div className="p-5">
            <p className="capitalize">Flex Push button bombar</p>
            <p className="text-base">
              <span className="text-sm line-through mr-1">$225.00</span>$190.00
            </p>
          </div>
          <Image
            alt=""
            src={prom4}
            width={220}
            height={220}
            className="mx-auto"
          />
        </div>
      </div>


    </div>
  )
}