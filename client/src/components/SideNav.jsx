import React from 'react';
import { AiOutlineClose,  AiFillDashboard,AiOutlineUser} from 'react-icons/ai';

import { Navigate, useNavigate } from 'react-router-dom';
import {MdInventory2,MdHelp} from 'react-icons/md'


export default function SideNav({ nav, setNav }) {
    const navigate = useNavigate();
    return (
        <div
      className={
        nav
          ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
          : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
      }
    >
      <AiOutlineClose
        onClick={() => setNav(!nav)}
        size={30}
        className='absolute right-4 top-4 cursor-pointer'
      />
      <nav>
        <ul className='flex flex-col p-4 text-gray-800'>
          <li>
            <button
              onClick={() => navigate('/dashboard')}
              className='cursor-pointer'
            >
              <AiFillDashboard className='mr-4' size={25} />
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/inventory')}
              className='cursor-pointer'
            >
              <MdInventory2 className='mr-4' size={25} />
              Update Product
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/user')}
              className='cursor-pointer'
            >
              <AiOutlineUser className='mr-4' size={25} />
              User
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/help')}
              className='cursor-pointer'
            >
              <MdHelp className='mr-4' size={25} />
              Help
            </button>
          </li>
        </ul>
      </nav>
    </div>
    )}