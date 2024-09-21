
"use client"; 
import Image from 'next/image';
import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";

const Nav = () => {
  const navItems = [
    { name: 'Buy', dropdown: ['Homes for Sale', 'Open Houses', 'New Homes', 'Recently Sold'] },
    { name: 'Rent', dropdown: ['All Rentals', 'Apartments for Rent', 'Houses for Rent', 'Post a Rental Listing'] },
    { name: 'Mortgage', dropdown: ['Mortgage Overview', 'Get Pre-Qualified', 'Mortgage Rates', 'Refinance Rates', 'Mortgage Calculator', 'Affordability Calculator', 'Refinance Calculator'] },
    { name: 'Saved Homes' },
    { name: 'Saved Searches' }
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-row justify-between my-4 items-center mx-2">
      {/* Logo and Nav Items */}
      <div className="flex gap-4 items-center">
        <Image
          alt="logo"
          //src="https://www.zillowstatic.com/bedrock/app/uploads/sites/19/2019/06/2019_Trulia_Logo_RGB_Black-e06237-500x262.jpg"
          src="/trulia.jpg"
          width={100}
          height={40}
        />

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-4 items-center">
          {navItems.slice(0, 3).map((item, id) => (
            <div key={id} className="relative group">
              <h3 className="cursor-pointer p-2 hover:text-white hover:bg-teal-500 hover:rounded-lg transition-all">
                {item.name}
              </h3>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 hidden group-hover:flex flex-col bg-white text-teal-500 p-4 rounded shadow-lg z-10">
                {item.dropdown?.map((subItem, index) => (
                  <p key={index} className="py-1 px-4 cursor-pointer hover:bg-teal-500 hover:text-white rounded">
                    {subItem}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right-side Nav Items */}
      <div className="hidden md:flex gap-4 items-center">
        {navItems.slice(3).map((item, id) => (
          <div key={id} className="relative group">
            <h3 className="cursor-pointer p-2 hover:text-white hover:bg-teal-500 hover:rounded-lg transition-all">
              {item.name}
            </h3>
            {/* Dropdown Menu */}
            {item.dropdown && (
              <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white p-2 rounded shadow-lg z-10">
                {item.dropdown.map((subItem, index) => (
                  <p key={index} className="py-1 px-2 cursor-pointer hover:bg-teal-500 hover:text-white rounded">
                    {subItem}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="border-gray-300 rounded-lg border p-2 hover:bg-gray-400 hover:text-white cursor-pointer transition-all">
          Sign up or Login
        </div>
        <div className="flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-teal-500">
          <MdMenu size={24}  />
        </button>
      </div>
      </div>

      {/* Menu Icon for All Screens */}
      

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col md:hidden z-10">
          {navItems.map((item, id) => (
            <div key={id} className="relative group py-1">
              <h3 className="cursor-pointer hover:text-white hover:bg-teal-500 p-2 rounded">
                {item.name}
              </h3>
              {item.dropdown && (
                <div className="mt-2 flex flex-col">
                  {item.dropdown.map((subItem, index) => (
                    <p key={index} className="py-1 px-2 cursor-pointer hover:bg-teal-500 hover:text-white rounded">
                      {subItem}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
