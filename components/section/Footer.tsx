import Image from "next/image"
import logo from '/public/images/Logo.jpg';
import { Facebook , Twitter , Linkedin} from "lucide-react";

//c3c0s@786

export const Footer = () => {
  return (
    <div className=" mt-40">

        <div className="flex  justify-around mx-28">
            <div>
                <div className="max-w-sm w-full">
                    <Image src={logo} className="w-140 h-25" alt="logo" />

                    <p className="flex justify-center text-justify text-sm mt-8 w-64">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                </div>
                {/* social icons */}
                <div className="mt-8 max-w-sm w-full flex items-center space-x-5">
                    <div className="bg-gray-200 w-8 h-8 rounded-sm flex justify-center items-center hover:cursor-pointer ">
                      <Twitter />
                    </div>
                    <div className="bg-gray-200 w-8 h-8 rounded-sm flex justify-center items-center hover:cursor-pointer">
                      <Facebook />
                    </div>
                    <div className="bg-gray-200 w-8 h-8 rounded-sm flex justify-center items-center hover:cursor-pointer">
                      <Linkedin />
                    </div>
                </div>
            </div>

            <div >
                <div className="max-w-sm w-full items-center justify-center ">
                  <h1 className="font-bold text-lg text-black opacity-70">Company</h1>
                  <ul className="text-base font-normal text-black opacity-50 space-y-1 mt-8 hover:cursor-pointer">
                    <li><a>About</a></li>
                    <li><a>Terms of Use</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>How it Works</a></li>
                    <li><a>Contact Us</a></li>
                    
                  </ul>


                </div>
                
            </div>

            <div >
                <div className="max-w-sm w-full items-center justify-center ">
                  <h1 className="font-bold text-lg text-black opacity-70">Support</h1>
                  <ul className="text-base font-normal text-black opacity-50 space-y-1 mt-8">
                    <li><a>Support Carrer</a></li>
                    <li><a>24h Service</a></li>
                    <li><a>Quick Chat</a></li>
                    
                    
                  </ul>


                </div>
                
            </div>

            <div >
                <div className="max-w-sm w-full items-center justify-center ">
                  <h1 className="font-bold text-lg text-black opacity-70">Contact</h1>
                  <ul className="text-base font-normal text-black opacity-50 space-y-1 mt-8">
                    <li><a>Whatsapp</a></li>
                    <li><a>Support 24h</a></li>
                    
                    
                  </ul>


                </div>
                
            </div>

        </div>

        <div className="mt-40 bg-black w-full h-0.5" />

        <div className="flex mt-10 mx-20 items-center justify-around mb-5">
          <p>Copyright © 2023 Dine Market</p>
          {/* <p>Design by. <a className="font-bold" href="https://hikmeedev.vercel.app/"></a></p>
   */}


        </div>

        
  </div>
  )
}
