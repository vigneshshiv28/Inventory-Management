import React, { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose,AiFillTag} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai'
import SideNav from "./SideNav";

export default function Navbar(){
    const[nav,setNav] = useState(false);

    return (
        <div  className='max-w-[1640px] bg-purple-400 mx-auto flex justify-between items-center p-4'>
            {/*Left Side */}
            <div className='flex items-center'>
                <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30} /> 
                </div>
                <h1 className='text-2xl text-white sm:text-3xl lg:text-4xl px-2'>
                    Welcome Admin
                </h1>
            </div>
            {/*Search input */} 
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25}/>
                <input className=' bg-transparent p-2 w-full focus:outline=none border-none' type="text" placeholder='Search Products' />
            </div>
            
             {/*Mobile Menu */}
             {/*Overlay */}
             {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
             </div>:''}
             
             {/* Side Draw Menu*/}
            <SideNav nav={nav} setNav={() => setNav(false)}/>
        </div>
      )
}
