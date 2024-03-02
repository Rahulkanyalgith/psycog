import React, { useState } from 'react';

const navList = (
  <ul className=' py-2 lg:flex md:flex sm:flex lg:gap-5 md:gap-6 sm:gap-9 text-white font-semibold'>
    <li className='px-4 cursor-pointer'>Home</li>
    <li className='px-4 cursor-pointer'>About</li>
    <li className='px-4 cursor-pointer'>Contact</li>
    <li className='px-4 cursor-pointer '>Services</li>
    <button className='text-white bg-green-500 px-3 py-1 rounded-md'>Signup</button>
    <button className='text-white bg-green-500 px-3 py-1 rounded-md'>Login</button>
  </ul>
)

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="main bg-indigo-700 lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center sm:flex sm:justify-between sm:items-center px-3 py-3">
        {/* left  */}
        <div className="left">
          <div className=" flex items-center justify-between">
            {/* logo  */}
          
            <div className="left flex items-center space-x-3">
        <img
          className="w-10"
          src="https://static.thenounproject.com/png/66159-200.png"
          alt=""
        />
        <h2 className="logo font-bold text-2xl text-white text-center">
        PSYCHOG
      </h2>
      </div>
            {open ? 
            // Cross Icon 
            <button
              onClick={() => setOpen(!open)}
              className=' lg:hidden md:hidden sm:hidden'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-x text-white w-8 h-8">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          : 
          // Menu Icon 
          <button
              onClick={() => setOpen(!open)}
              className=' lg:hidden md:hidden sm:hidden'>
              <svg
                xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          }



          </div>
        </div>

        {/* right Desktop  */}
        <div className="right hidden lg:block md:block sm:block ">
          {navList}
        </div>

        {/* Mobile Navlist  */}
        {open && <div className=" mobile navlist lg:hidden md:hidden sm:hidden">
          {navList}
        </div>}
      </div>
    </div>
  )
}
