import React from 'react';

const CardForm = () => {
  return (
    <div className="w-full rounded-[10px] border-[1px] border-[#E2E2E2] bg-white mt-4 px-8 py-10 shadow-sm">
      <div>
       
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* First column of inputs */}
          <div>
          <h1 className='text-[18px] font-[500] text-[#121212] font-sans'>Card Request Details</h1>
            <input type="text" className="w-full px-3 py-3 border border-[#E2E2E2] rounded-[6px] mt-2" placeholder="Corporate" />
          </div>

          {/* Second column of inputs */}
          <div>
          <h1 className='text-[18px] font-[500] text-[#121212] font-sans'>Initiator</h1>
            <input type="text" className="w-full px-3 py-3 border border-[#E2E2E2] rounded-[6px] mt-2" placeholder="RootUser" />
          </div>

          {/* Add more inputs here */}
          <div>
          <h1 className='text-[18px] font-[500] text-[#121212] font-sans'>Card Type</h1>
            <input type="text" className="w-full px-3 py-3 border border-[#D0D5DD] rounded-[8px] mt-2" placeholder="ClassicDebit" />
          </div>
          <div>
          <h1 className='text-[18px] font-[500] text-[#121212] font-sans'>Card Charges</h1>
            <input type="text" className="w-full px-3 py-3 border border-[#D0D5DD] rounded-[8px] mt-2"  placeholder="1,500"  />
          </div>
          <div>
          <h1 className='text-[18px] font-[500] text-[#121212] font-sans'>Quantity</h1>
            <input type="text" className="w-full px-3 py-3 border  border-[#D0D5DD] rounded-[8px] mt-2"  placeholder="10"  />
          </div>
          <div>
            <h4 className='text-[18px] font-[500] text-[#121212]  font-sans'>Batch</h4>
            <input type="text" className="w-full px-3 py-3 border border-[#D0D5DD] rounded-[8px] mt-2" placeholder='853723892992' />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CardForm;
