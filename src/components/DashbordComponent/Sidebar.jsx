import Image from 'next/image'
import React from 'react'
import Logo from "../assests/logo.png"
import { HiOutlineHome } from "react-icons/hi2";
import { LuBuilding2, LuSettings2 } from "react-icons/lu";
import { FaCreditCard, FaListUl, FaUser, FaUsers } from "react-icons/fa6";
import { CiCreditCard1, CiMap } from "react-icons/ci";
import { MdOutlineCreditScore } from "react-icons/md";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { IoLayers } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";


const Sidebar = () => {
  return (
    <div className='w-full px-[10px]'>
        <div className='px-2 py-6 relative w-[138px] h-[45px] mt-[27px] '>
           <Image
           src={Logo}
           alt='logo'
           fill
           /> 
        </div>

        <div className='px-2 mt-4'>
        <div 
        className='flex gap-2 rounded-[8px] border-[0.6px]
         border-[#E2E2E2] bg-[#E2E2E2]  px-2 py-2'>
          <span className='text-[16px] text-[#014DAF]'><HiOutlineHome /></span>
         <h4 className='text-[12px] font-[400px] text-[#014DAF] leading-[18px]  font-sans'>Dashboard</h4>
         </div>

         <div className='mt-2'> 
          <h3 className='text-[9px] font-500 font-sans mt-4  ml-6'>MAIN MENU</h3>
         </div>
         <div>
          
         </div>

        </div>
        <div className='px-2 mt-4 space-y-2'>
        <div className='flex gap-2 hover:rounded-[8px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[0.6px] hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] text-black '><LuBuilding2 /></span>
         <h4 className='text-[12px] font-[400px]  leading-[18px]  font-sans'>Branches</h4>
         </div>

         <div className='flex gap-2 hover:rounded-[8px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[0.6px] hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><FaUser /></span>
         <h4 className='text-[12px] font-[400px] leading-[18px]  font-sans'>Roles</h4>
         </div>

         <div className='flex gap-2 hover:rounded-[8px] hover:border-[0.6px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><FaUsers /></span>
         <h4 className='text-[12px] font-[400px]  leading-[18px]  font-sans'>Users</h4>
         </div>
         <div className='flex gap-2 hover:rounded-[8px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[0.6px] hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><LuSettings2 /></span>
         <h4 className='text-[12px] font-[400px]  leading-[18px]  font-sans'>Card Scheme</h4>
         </div>
         <div className='flex gap-2 text-black hover:text-[#014DAF] cursor-pointer hover:rounded-[8px] hover:border-[0.6px] hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><CiCreditCard1 /></span>
         <h4 className='text-[12px] font-[400px] leading-[18px]  font-sans'>Card Profile</h4>
         </div>

         <div className='flex gap-2 hover:rounded-[8px] hover:border-[0.6px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><MdOutlineCreditScore /></span>
         <h4 className='text-[12px] font-[400px]  leading-[18px]  font-sans'>Card Request</h4>
         </div>

         <div className='flex gap-2 hover:rounded-[8px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[0.6px] hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><PiProjectorScreenChartLight /></span>
         <h4 className='text-[12px] font-[400px]  leading-[18px]  font-sans'>Stock</h4>
         </div>

         <div className='flex gap-2 hover:rounded-[8px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[0.6px] hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><FaCreditCard /></span>
         <h4 className='text-[12px] font-[400px]  leading-[18px]  font-sans'>Card</h4>
         </div>

         <div className='flex gap-2 hover:rounded-[8px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[0.6px] hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><FaListUl /></span>
         <h4 className='text-[12px] font-[400px]  leading-[18px]  font-sans'>Authorization List</h4>
         </div>

         <div className='flex gap-2 hover:rounded-[8px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[0.6px] hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><IoLayers /></span>
         <h4 className='text-[12px] font-[400px]  leading-[18px]  font-sans'>Authorization Queue</h4>
         </div>

         <div className='flex gap-2 hover:rounded-[8px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[0.6px] hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><CiMap /></span>
         <h4 className='text-[12px] font-[400px]  leading-[18px]  font-sans'>Trail</h4>
         </div>

         <div className='flex gap-2 hover:rounded-[8px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[0.6px] hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><FaUser /></span>
         <h4 className='text-[12px] font-[400px]  leading-[18px]  font-sans'>Users</h4>
         </div>
        </div>

        <div className='mt-24 px-2 '>
        <div className='flex gap-2 hover:rounded-[8px] text-black hover:text-[#014DAF] cursor-pointer hover:border-[0.6px] hover:border-[#E2E2E2]
         hover:bg-[#E2E2E2]  px-2 py-2'>
        <span className='text-[16px] '><AiOutlineLogout /></span>
         <h4 className='text-[12px] font-[400px]  leading-[18px]  font-sans'>Logout</h4>
         </div>
        </div>

    </div>
  )
}

export default Sidebar