"use client";

import Sidebar from '@/components/DashbordComponent/Sidebar';
import React, { useState } from 'react';
import { HiOutlineHome } from 'react-icons/hi2';
import { FaSearch } from 'react-icons/fa';
import { CiBellOn, CiUser } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';
import { useToggle } from '@/Provider';

const Layout = ({ children }) => {

  
  const {isSidebarOpen, setIsSidebarOpen} = useToggle(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_auto] h-screen">
      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 bottom-0 w-64 h-screen bg-[#f8f4f3] p-4 z-50 lg:relative 
        overflow-y-auto transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>

      {/* Main Content */}
      <main className="h-screen w-full bg-[#F1f7FF] overflow-y-auto">
        {/* Header */}
       

        {children}
      </main>
    </div>
  );
};

export default Layout;
