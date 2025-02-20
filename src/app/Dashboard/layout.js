"use client";

import Sidebar from '@/components/DashbordComponent/Sidebar';
import React, { useState } from 'react';
import { HiOutlineHome } from 'react-icons/hi2';
import { FaSearch } from 'react-icons/fa';
import { CiBellOn, CiUser } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-6 min-h-screen ${isSidebarOpen ? "overflow-hidden" : ""}`}>
      {/* Sidebar */}
      <div className={`fixed inset-0 z-50 bg-white lg:relative lg:z-auto lg:block transition-all duration-300 
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
      {/* Main Content */}
      <main className="h-full lg:col-span-5 w-full bg-[#F1f7FF]">
        {/* Header */}
        <header className="flex flex-wrap justify-between items-center bg-white border-b-[#D0D5DD] 
         border-b-[2px] w-full px-4 py-2">        
          {/* Toggle Button for Sidebar */}
          <button className="lg:hidden text-xl text-[#014DAF]" onClick={() => setIsSidebarOpen(true)}>
            <FiMenu />
          </button>
          {/* Dashboard Title */}
          <div className="flex gap-2 px-2 py-2 items-center">
            <span className="text-[16px] text-black">
              <HiOutlineHome />
            </span>
            <h4 className="text-[12px] font-[500px] text-black leading-[18px] font-sans">Dashboard</h4>
          </div>

          {/* Search and Icons */}
          <div className="flex gap-2 items-center flex-wrap">
            <div className="relative w-[150px] sm:w-[180px] h-[28px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-2 py-1.5 text-[12px] border-[0.98px] rounded-[97.99px] 
                border-[#D0D5DD] placeholder:text-xs"
              />
              <FaSearch className="absolute left-2 top-2/3 transform -translate-y-1/2 text-[#D0D5DD] text-sm" />
            </div>
            <span className="h-[20px] w-[20px] rounded-full flex justify-center items-center">
              <CiBellOn />
            </span>
            <span className="h-[32px] w-[32px] rounded-full bg-[#DEDEDF] flex justify-center items-center">
              <CiUser />
            </span>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
};

export default Layout;
