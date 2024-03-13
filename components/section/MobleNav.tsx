import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
export const MobleNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div onClick={handleNav} className="md:hidden">
        {nav ? <AiOutlineClose size="25" className="text-black cursor-pointer hover:scale-110"/> :
          <AiOutlineMenu size="25" />
        }

      </div>
      {nav && <div className="sticky left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 text-black bg-white">
        <div className="border-b border-gray-300 my-6">
          <p className="w-[90%] md:w-[95%] py-4">E Commerce</p>
        </div>
        <div className="py-4 flex-col ">
          <ul className="uppercase text-sm">
            <a className="cursor-pointer hover:scale-110 duration-150" onClick={handleNav} href={"#"}>
              <li className="py-4 " id='male'>Male</li>
            </a>
            <a className="cursor-pointer hover:scale-110 duration-150" onClick={handleNav} href={"#"}>
              <li className="py-4 " id='female'>Female</li>
            </a>
            <a className="cursor-pointer hover:scale-10 duration-150" onClick={handleNav} href={"#"}>
              <li className="py-4 " id='kids'>Kids</li>
            </a>
            <a className="cursor-pointer hover:scale-10 duration-150" onClick={handleNav} href={"#"}>
              <li className="py-4 " id='productions'>All Productions</li>
            </a>

          </ul>
        </div>
      </div>}
    </div>
  )
}
export default MobleNav;