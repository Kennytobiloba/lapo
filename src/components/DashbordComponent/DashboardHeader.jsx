"use client";

import { useToggle } from "@/Provider";
import { HiOutlineHome } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { CiBellOn, CiUser } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import React from "react";

const DashboardHeader = () => {
  const { toggle } = useToggle();
  return (
    <header
      className="flex justify-between items-center bg-white border-b border-[#D0D5DD] 
    w-full px-4 py-2 sticky top-0 z-10"
    >
    {/* Toggle Button for Sidebar */}
    <div className="flex gap-2 items-center">
    <button className="lg:hidden text-xl text-[#014DAF]" onClick={toggle}>
      <FiMenu />
    </button>

    {/* Dashboard Title */}
    <div className=" gap-2 items-center flex ">
      <HiOutlineHome className="lg:text-[16px] text-[20px] text-black" />
      <h4 className="text-[14px] pt-1 font-medium text-black md:block hidden">
        Dashboard
      </h4>
     </div>
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
      <FaSearch className="absolute left-3 text-[12px] top-[58%] transform -translate-y-1/2 text-[#D0D5DD] text-sm" />
      </div>
      <span className="h-[20px] w-[20px] text-[18px] font-[600] rounded-full flex justify-center items-center">
        <CiBellOn />
      </span>
      <span className="h-[32px] w-[32px] rounded-full bg-[#DEDEDF] flex justify-center items-center">
        <CiUser />
      </span>
      </div>
    </header>
  );
};

export default DashboardHeader;
