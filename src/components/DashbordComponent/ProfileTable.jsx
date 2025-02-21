"use client"
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";


const ProfileTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const profiles = [
    { id: 1, name: "Verve-1", currency:"NGN", Exipiration: "12 months", Bin:"501166", date: "Nov. 4, 2022", email: "helen@sailboatui.com" },
    { id: 2, name: "Verve-1", currency:"NGN", Exipiration: "12 months", Bin:"501166", date: "Nov. 4, 2022", email: "helen@sailboatui.com" },
    { id: 3, name: "Verve-1", currency:"NGN", Exipiration: "12 months", Bin:"501166", date: "Nov. 4, 2022", email: "helen@sailboatui.com" },
    { id: 4, name: "Verve-1", currency:"NGN", Exipiration: "12 months", Bin:"501166", date: "Nov. 4, 2022", email: "helen@sailboatui.com" },
 
  ];

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="  rounded-md mt-4">
      {/* Search & Add Profile Section */}
      <div className="flex  flex-wrap gap-4 md:flex-nowrap md:justify-between
       items-center mb-4 lg:border-[1px] lg:border-t-[#98A2B3] lg:border-b-[#98A2B3] py-2 lg:px-2 lg:space-y-0 space-y-1 ">
        <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-3 border-[#D0D5DD]  rounded-md focus:ring focus:ring-[#D0D5DD]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <button className="bg-blue-600 mb-4 text-white flex 
         items-center  gap-2 px-4 py-3 rounded-md hover:bg-blue-700">
        <span className=" text-[12px] "><FaPlus /></span>
          <h3 className="text-sm"> Add Profile</h3> 
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border bg-white border-gray-300 text-left text-sm text-gray-700">
          <thead className="bg-gray-100 border-b border-gray-300 text-[12px] text-[#475467] font-[500]">
          <tr>
            <th className="px-6 py-3 border-r">Card Name</th>
            <th className="px-6 py-3 border-r">Currency</th>
            <th className="px-6 py-3 border-r">Exipiration</th>
            <th className="px-6 py-3 border-r">Bin Prefix</th>
            <th className="px-6 py-3 border-r">Date Created</th>
            <th className="px-6 py-3">Action</th>
          </tr>
          </thead>
          <tbody>
          {filteredProfiles.map((profile) => (
          <tr key={profile.id} className="border-b border-gray-300  text-[12px] text-[#475467] font-[500]">
          <td className="px-6 py-4 border-r">{profile.name}</td>
          <td className="px-6 py-4 border-r">{profile.currency}</td>
          <td className="px-6 py-4 border-r">{profile.Exipiration}</td>
          <td className="px-6 py-4 border-r">{profile.Bin}</td>
          <td className="px-6 py-4 border-r">{profile.date}</td>         
           <td className="px-6 py-4 flex gap-4 text-[#475467]">
            <a href="#" className=" hover:underline text-[18px]">
            <CiTrash />
            </a>
            <a href="#" className=" hover:underline text-[18px]">
            <MdEdit />
            </a>
          </td>
          </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileTable;
