'use client'
import React from 'react'
import Image from 'next/image';
import Logo from "/public/images/Logo.jpg";
import { Search, ShoppingCart } from "lucide-react"
import { AiOutlineClose, AiOutlineMenu, AiFillMediumSquare } from "react-icons/ai";
import { useState } from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar"

import Link from 'next/link';
import MobleNav from './MobleNav';

const Navbar = () => {



  return (
    <div className='h-12 py-5 mx-5 max-w-auto justify-center w-full '>
      <Menubar className='hidden md:flex md:gapx-x-5   md:text-sm  border-none lg:flex'>
        <div className='py-5 px-10 '>
          <Image src={Logo} className='items-center lg:mx-20 flex-shrink-0 ' w-140 h-25 alt="logo" loading='lazy' ></Image>
        </div>
        <MenubarMenu>
          <MenubarTrigger><Link href={"#"}>Female</Link></MenubarTrigger>
          <MenubarTrigger><Link href={"#"}>Male</Link></MenubarTrigger>
          <MenubarTrigger><Link href={"#"}>Kids</Link></MenubarTrigger>
          <MenubarTrigger> <Link href="./productspage">All Production</Link></MenubarTrigger>
          <div className='flex border rounded-r flex-grow'>
            <Search className="bg-white rounded-l" />
            <input type='text' placeholder='what you are looking for  ' className='rounded-none flex-grow w-auto text-center' />
          </div>
          <div className="p-2 rounded-full bg-gray-300 ">
            <ShoppingCart className="relative flex-shrink-0" />
            <span className="absolute top-3 right-35 h-5 w-5 text-center rounded-full bg-[#f02d34] text-white">
              0
            </span>
          </div>
          {/* <MenubarContent>
          <MenubarItem>
            Clothes 
            <MenubarShortcut>Clothes</MenubarShortcut> 
          </MenubarItem>
          <MenubarItem>Shoes</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Kids</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>All Production</MenubarItem>
        </MenubarContent> */}
        </MenubarMenu>
        {/*Mobile Navbar*/}

      </Menubar>

      {/* Mobile Menu*/}
      <div>
        <MobleNav />
      </div>

    </div>
  )
}

export default Navbar;
