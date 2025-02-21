import CardForm from '@/components/DashbordComponent/CardForm'
import React from 'react'

const page = () => {
  return (
    <div>
    <div className='bg-[#F1F7FF]'>
      <div className='px-4 mt-6 '>
      <h3 className='text-[18px] font-[700] text-[#101828] font-sans'>Request Details</h3>
      <p className='text-[12px] font-[400] text-[#475667] font-sans'>Perform predetermined actions on card requests here.</p>
      <CardForm/>

        
      </div>
    </div>

    </div>
  )
}

export default page