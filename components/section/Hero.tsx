import { ShoppingCart } from "lucide-react"
import header from '/public/images/header.jpg';
import br1 from '/public/images/br1.jpg';
import br2 from '/public/images/br2.jpg';
import br3 from '/public/images/br3.jpg';
import br4 from '/public/images/br4.jpg';

import { Button } from "../ui/button"
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col gap-y-10 lg:flex-row mx-5 justify-between sm:items-center content-center max-w-auto w-full ">
      <div className="flex justify-start text-justify flex-col py-12 px-5 max-w-md mx-20">
        <span className="bg-cyan-200 h-8 w-24 mt-12 border-6 flex items-center justify-center text-blue-600 font-600 rounded-sm ">Sale 70%</span>
        <div className="mt-7 ">
          <h1 className="  text-lg font-bold lg:text-5xl ">
            An Industrial Take on Streetwear
          </h1>
        </div>

        <div className="mt-6 max-w-sm w-full justify-text-justify text-xs">
          <p className="leading-7 [&:not(:first-child)]:mt-8">
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
          </p>
        </div>

        <div className="pt-5 mt-6">
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4 sm:w-auto " />  Start Shopping
          </Button>
        </div>
        <div className="flex flex-wrap mt-10 py-10 gap-x-8 sm:w-auto sm:gap-y-3">
          <Image className="w-100 h-35 " decoding="async" src={br1} alt="brandlogo" loading="lazy" ></Image>
          <Image className="w-100 h-35" decoding="async" src={br2} alt="brandlogo" loading="lazy" ></Image>
          <Image className="w-100 h-35 " decoding="async" src={br3} alt="brandlogo" loading="lazy" ></Image>
          <Image className="w-100 h-35 " decoding="async" src={br4} alt="brandlogo" loading="lazy" ></Image>
        </div >
      </div>
      <div className="flex-shrink-0 bg-orange-100 w-25 h-25 rounded-full mt-8 mx-5 hidden sm:block flex-auto ">
        <Image width={500} height={500} decoding="async" src={header} alt="header" loading="lazy" ></Image>
      </div>

    </div>

  )
}
