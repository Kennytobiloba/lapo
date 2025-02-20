"use client";

import Sidebar from '@/components/DashbordComponent/Sidebar';
import React, { useState } from 'react';
import { HiOutlineHome } from 'react-icons/hi2';
import { FaSearch } from 'react-icons/fa';
import { CiBellOn, CiUser } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_auto] min-h-screen">
      {/* Sidebar */}
      <div className={`absolute lg:relative transition-transform duration-300 
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
      {/* Main Content */}
      <main className="h-screen w-full bg-[#F1f7FF]">
        {/* Header */}
        <header className="flex justify-between items-center bg-white border-b border-[#D0D5DD] 
         w-full px-4 py-2">        
          {/* Toggle Button for Sidebar */}
          <button className="lg:hidden text-xl text-[#014DAF]" onClick={() => setIsSidebarOpen(true)}>
            <FiMenu />
          </button>

          {/* Dashboard Title */}
          <div className="flex gap-2 items-center">
            <HiOutlineHome className="text-[16px] text-black" />
            <h4 className="text-[12px] font-medium text-black">Dashboard</h4>
          </div>

          {/* Search and Icons */}
          <div className="flex gap-2 items-center">
            <div className="relative w-[180px] h-[28px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-2 py-1.5 text-[12px] border rounded-full 
                border-[#D0D5DD] placeholder:text-xs"
              />
              <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#D0D5DD] text-sm" />
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
