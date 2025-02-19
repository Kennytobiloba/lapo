import Sidebar from '@/components/DashbordComponent/Sidebar'
import React from 'react'
import { HiOutlineHome } from 'react-icons/hi2'
import { FaBell, FaSearch } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import { CiBellOn, CiUser } from 'react-icons/ci';

const Layout = ({children}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-6  min-h-screen'>
        <div>
        <div className="  h-full bg-white border-r-[1px] border-[#DEDEDF]">
           <Sidebar/> 
        </div>
        </div>

        <main className='  h-full  lg:col-span-5 w-full bg-[#F1f7FF]'>
          <header className='flex justify-between items-center bg-white border-b-[#D0D5DD]
           border-b-[2px] w-full px-2 py-2  '>
            <div className='flex gap-2 px-4 py-2 '>
            <span className='text-[16px] text-black'><HiOutlineHome /></span>
            <h4 className='text-[12px] font-[500px] text-black leading-[18px]  font-sans'>Dashboard</h4>
            </div>
             <div>  
             </div>
             <div className='flex gap-2 items-center'>
             <div className="relative w-[180px] h-[28px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-2 py-1.5 text-[12px] border-[0.98px] rounded-[97.99px] border-[#D0D5DD] placeholder:text-xs"
              />
              <FaSearch className="absolute  left-2 top-2/3 transform -translate-y-1/2 text-[#D0D5DD] text-sm" />
            </div>
             <span className='h-[20px] w-[20px] rounded-full flex justify-center items-center'>
             <CiBellOn />
             </span>
             <span className='h-[32px] w-[32px] rounded-full bg-[#DEDEDF] flex justify-center items-center'>
             <CiUser />
             </span>
             </div>



          </header>
            {children}
        </main>
    </div>
  )
}

export default Layout