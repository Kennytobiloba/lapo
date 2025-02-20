import ProfileTable from '@/components/DashbordComponent/ProfileTable'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#F1F7FF]'>
      <div className='px-4 mt-2 '>
        <h3 className='text-[18px] font-[700] text-[#101828] font-sans'>Card Profile</h3>
        <p className='text-[12px] font-[400] text-[#475667] font-sans'>Create, view and edit card profiles here.</p>

        <ProfileTable/>
      </div>
    </div>
  )
}

export default page