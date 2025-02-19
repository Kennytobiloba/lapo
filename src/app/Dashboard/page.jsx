import React from 'react'
import { CiCircleCheck, CiCreditCard1, CiMoneyBill } from 'react-icons/ci'
import { FaCreditCard, FaRegHourglass } from 'react-icons/fa'
import { MdArrowOutward, MdCreditCard, MdOutlineCreditScore } from 'react-icons/md'
import { PiGreaterThanLight } from 'react-icons/pi'

const page = () => {
  return (
    <div className="px-6 mt-6">
    <div className='flex justify-between'>
      <div>
        <p className='text-[18px] font-[700px] text-[#121212] font-sans leading-[24px]'>Hi Nazeer, what would you like to do today? </p>
        <p className='text-[12px] font-[400px] text-[#121212] font-sans mt-2 '>Last login: 26/11/2024  14:39:58</p>
      </div>
      <h3>calender</h3>
    </div>
     <div>
     </div>
     {/* secend section */}
     <div className='bg-white rounded-[10px] border-[1px] py-4 px-2 mt-4'>
      <p className='text-[16px] font-[500px] text-[#121212] font-sans  '>Your Quick Access</p>
      <div className='lg:grid-cols-4 grid-cols-1 gap-4 grid w-full mt-2'>
        <div className='bg-[#F1F7FF] rounded-[4px] flex gap-4 px-2 py-2 items-center'>
          <span className='h-[28px] w-[28px] rounded-full bg-[#014DAF] text-[14px] text-white flex justify-center items-center ' >
          <CiCreditCard1 />
          </span>
          <div className='flex gap-2 items-center '>
          <h4 className='text-[14px] font-[500px] text-[#121212] font-sans '>Manage a Card</h4>
          <span className='text-[8px] font-[400]'><PiGreaterThanLight /></span>
          </div>
          

        </div>

        <div className='bg-[#F1F7FF] rounded-[4px] flex gap-4 px-2 py-2 items-center'>
          <span className='h-[28px] w-[28px] rounded-full bg-[#014DAF] text-[14px] text-white flex justify-center items-center ' >
          <MdCreditCard />
          </span>
          <div className='flex gap-2 items-center '>
          <h4 className='text-[14px] font-[500px] text-[#121212] font-sans '>Issue Instant Card</h4>
          <span className='text-[8px] font-[400]'><PiGreaterThanLight /></span>
          </div>
          

        </div>


        <div className='bg-[#F1F7FF] rounded-[4px] flex gap-4 px-2 py-2 items-center border border-[#E2E2E2]'>
          <span className='h-[28px] w-[28px] rounded-full bg-[#014DAF] text-[14px] text-white flex justify-center items-center ' >
          <MdOutlineCreditScore />
          </span>
          <div className='flex gap-2 items-center '>
          <h4 className='text-[14px] font-[500px] text-[#121212] font-sans '>Issue Personalized Card</h4>
          <span className='text-[8px] font-[400]'><PiGreaterThanLight /></span>
          </div>
          

        </div>

        <div className='bg-[#F1F7FF] rounded-[4px] flex gap-4 px-2 py-2 items-center'>
          <span className='h-[28px] w-[28px] rounded-full bg-[#014DAF] text-[14px] text-white flex justify-center items-center ' >
          <FaCreditCard />
          </span>
          <div className='flex gap-2 items-center '>
          <h4 className='text-[14px] font-[500px] text-[#121212] font-sans '>Review Card Requests</h4>
          <span className='text-[8px] font-[400]'><PiGreaterThanLight /></span>
          </div>
          

        </div>

      </div>

     </div>

      {/* secend section end*/}

      {/* third section */}
      <div className='grid lg:grid-cols-4 grid-cols-1 mt-4 gap-4'>
        {/* grid one */}
        <div className='bg-white rounded-[10px] border border-[#E2E2E2] py-2 px-2'>
          <div className='flex flex-col '>
            <div className='flex flex-col gap-1 text-[#00984c]'>
            <span className='text-[14px]'>
          <CiCreditCard1 />
          </span>
          <h3 className='text-[14px] font-[500px]  text-[#121212] font-sans'>Total Active Cards</h3>
          </div>
         <div className='mt-2 flex justify-between  items-center px-1'>
         <h2 className='text-[24px] font-[700px]  text-[#121212] font-sans'>26,478</h2>
         <div className='flex gap-1 items-center'>
         <div className='w-[56px] h-[20px] bg-[#EFFAFC] flex items-center gap-2 px-1'>
          <span className='text-[12px] text-[#29A174]'> <MdArrowOutward /> </span>
          <span className='text-[12px] text-[#29A174]'>+9%</span>
         </div>
         <span className='text-[12px] text-[#121212]'>this month</span>
         </div>
         
         </div>
          
          </div>

        </div>

        {/* grid two */}
        <div className='bg-white rounded-[10px] border border-[#E2E2E2] py-2 px-2'>
          <div className='flex flex-col '>
            <div className='flex flex-col gap-1 text-[#8020E4]'>
            <span className='text-[14px]'>
          <CiCreditCard1 />
          </span>
          <h3 className='text-[14px] font-[500px]  text-[#121212] font-sans'>Total Personalized Cards</h3>
          </div>
         <div className='mt-2 flex justify-between  items-center px-1'>
         <h2 className='text-[24px] font-[700px]  text-[#121212] font-sans'>15,703</h2>
         <div className='flex gap-1 items-center'>
         <div className='w-[56px] h-[20px] bg-[#EFFAFC] flex items-center gap-2 px-1'>
          <span className='text-[12px] text-[#29A174]'> <MdArrowOutward /> </span>
          <span className='text-[12px] text-[#29A174]'>8.5%</span>
         </div>
         <span className='text-[12px] text-[#121212]'>this month</span>
         </div>   
         </div> 
          </div>
        </div>

        {/* grid three */}

        <div className='bg-white rounded-[10px] border border-[#E2E2E2] py-2 px-2'>
          <div className='flex flex-col '>
            <div className='flex flex-col gap-1 text-[#2087E7]'>
            <span className='text-[14px]'>
            <CiMoneyBill />
          </span>
          <h3 className='text-[14px] font-[500px]  text-[#121212] font-sans'>Today’s Revenue</h3>
          </div>
         <div className='mt-2 flex justify-between  items-center px-1'>
         <h2 className='text-[24px] font-[700px]  text-[#121212] font-sans'>₦9.3M</h2>
         <div className='flex gap-1 items-center'>
         <div className='w-[56px] h-[20px] bg-[#EFFAFC] flex items-center gap-2 px-1'>
          <span className='text-[12px] text-[#29A174]'> <MdArrowOutward /> </span>
          <span className='text-[12px] text-[#29A174]'>+6%</span>
         </div>
         <span className='text-[12px] text-[#121212]'>this month</span>
         </div>
         </div>  
          </div>
        </div>

        {/* grid four */}

        <div className='bg-white rounded-[10px] border border-[#E2E2E2] py-2 px-2'>
          <div className='flex flex-col '>
            <div className='flex flex-col gap-1 text-[#E78020]'>
            <span className='text-[14px] text-[#E78020]'>
            <FaRegHourglass />
          </span>
          <h3 className='text-[14px] font-[500px]  text-[#121212] font-sans'>Pending Requests</h3>
          </div>
         <div className='mt-2 flex justify-between  items-center px-1'>
         <h2 className='text-[24px] font-[700px]  text-[#121212] font-sans'>38</h2>
         <div className='flex items-center gap-1'>
         <span className='text-[12px] text-[#E78020]'><CiCircleCheck /></span>
         <span className='text-[12px] text-[#E78020]'>Requires attention</span>
         </div>   
         </div>        
          </div>
        </div>
      </div>

      {/* third section end */}
        
    </div>
  )
}

export default page