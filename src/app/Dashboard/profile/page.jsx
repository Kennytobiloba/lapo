"use client"
import ProfileTable from '@/components/DashbordComponent/ProfileTable'
import React from 'react'

import { FaSearch } from 'react-icons/fa';
import { CiBellOn, CiUser } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';
import { useToggle } from '@/Provider';
import { TiCreditCard } from "react-icons/ti";
import { motion } from 'framer-motion';

const page = () => {
  const { toggle } = useToggle();
  return (
   <>
    <div
  
     className="flex justify-between items-center bg-white border-b border-[#D0D5DD] 
       w-full px-4 py-2 sticky top-0 z-10">        
        {/* Toggle Button for Sidebar */}
       <div className="flex gap-2 items-center">
       <button className="lg:hidden text-xl text-[#014DAF]" onClick={toggle}>
          <FiMenu />
        </button>
   
        {/* Dashboard Title */}
        <div className="flex gap-2 items-center">
        
          <TiCreditCard className="text-[18px] text-black" />
          <h4 className="text-[14px] font-medium text-black">Card Profile</h4>
        </div>
       </div>
   
        {/* Search and Icons */}
        <div className="flex gap-2 items-center">
        
          <span className="h-[32px] w-[32px] text-lg rounded-full flex justify-center items-center">
            <CiBellOn />
          </span>
          <span className="h-[32px] w-[32px] rounded-full bg-[#DEDEDF] flex justify-center items-center">
            <CiUser />
          </span>
        </div>
      </div>

   <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    className='bg-[#F1F7FF] mt-6'>
      <div className='px-4 mt-2 '>
        <h3 className='text-[18px] font-[700] text-[#101828] font-sans'>Card Profile</h3>
        <p className='text-[12px] font-[400] text-[#475667] font-sans'>Create, view and edit card profiles here.</p>

        <ProfileTable/>
      </div>
    </motion.div>
   </>
  )
}

export default page