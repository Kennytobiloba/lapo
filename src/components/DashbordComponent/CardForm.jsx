import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaFileAlt, FaRegCheckCircle } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { LuPackageCheck } from "react-icons/lu";
import { motion } from "framer-motion";

const CardForm = () => {
  return (
     <div className=" w-full rounded-[10px] border-[1px] 
    border-[#E2E2E2] bg-white mt-4 px-8 py-10 shadow-sm">
      <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {/* First column of inputs */}
        <div>
          <h1 className="text-[18px] font-[500] text-[#344054]  font-sans">
            Card Request Details
          </h1>
          <input
            type="text"
            className="w-full px-3 py-3 border border-[#E2E2E2] rounded-[6px] mt-2"
            placeholder="Corporate"
          />
        </div>

        {/* Second column of inputs */}
        <div>
          <h1 className="text-[18px] font-[500] text-[#344054]  font-sans">
            Initiator
          </h1>
          <input
            type="text"
            className="w-full px-3 py-3 border border-[#E2E2E2] rounded-[6px] mt-2"
            placeholder="RootUser"
          />
        </div>

        {/* Add more inputs here */}
        <div>
          <h1 className="text-[18px] font-[500] text-[#344054]  font-sans">
            Card Type
          </h1>
          <input
            type="text"
            className="w-full px-3 py-3 border border-[#D0D5DD] rounded-[8px] mt-2"
            placeholder="ClassicDebit"
          />
        </div>
        <div>
          <h1 className="text-[18px] font-[500] text-[#344054]  font-sans">
            Card Charges
          </h1>
          <input
            type="text"
            className="w-full px-3 py-3 border border-[#D0D5DD] rounded-[8px] mt-2"
            placeholder="1,500"
          />
        </div>
        <div>
          <h1 className="text-[18px] font-[500] text-[#344054]  font-sans">
            Quantity
          </h1>
          <input
            type="text"
            className="w-full px-3 py-3 border  border-[#D0D5DD] rounded-[8px] mt-2"
            placeholder="10"
          />
        </div>
        <div>
          <h4 className="text-[18px] font-[500] text-[#344054]   font-sans">
            Batch
          </h4>
          <input
            type="text"
            className="w-full px-3 py-3 border border-[#D0D5DD] rounded-[8px] mt-2"
            placeholder="853723892992"
          />
        </div>
        <div>
          <h4 className="text-[14px] font-[500] text-[#344054]   font-sans">
            Date Requested
          </h4>
          <h4 className="text-[16px] font-[500] text-[#101828]  font-sans">
            11/14/2024 10:27:43
          </h4>
        </div>
        <div>
          <h4 className="text-[14px] font-[500] text-[#344054]  font-sans">
            Status
          </h4>
          <button className="rounded-[16px] px-4 text-[16px] text-[#344054] py-2 bg-[#edf0f2]">
            Pending
          </button>
        </div>
      </div>
      </div>
      <div className=" mt-8">
        <h3 className="text-[#344054] text-[14px] mb-4">Actions</h3>
        <div className=" flex flex-wrap lg:gap-6  gap-2">
        <div className="bg-[#344054] text-white px-2 md:py-2 
        py-2 rounded-[4px] items-center text-[12px] flex gap-2">
        <span className="text-[12px]">
          <FaFileAlt />
        </span>
        <h3> Download for Production</h3>
        </div>
        <div className="bg-[#B54708] text-white px-2  
        md:py-2 py-2 rounded-[4px] items-center text-[12px] flex gap-2">
        <span className="text-[12px]">
          <AiOutlineLoading3Quarters />
        </span>
        <h3> Mark as In Progress</h3>
        </div>
        <div className="bg-[#067647] text-white px-2  
        md:py-2 py-2 rounded-[4px] items-center text-[12px] flex gap-2">
          <span className="text-[12px]">
            <GoPackage />
          </span>
          <h3>Mark as Ready</h3>
        </div>
        <div className="bg-[#8020E7] text-white px-2  
        md:py-2 py-2 rounded-[4px] items-center text-[12px] flex gap-2">
          <span className="text-[12px]">
            <LuPackageCheck />
          </span>
          <h3>Send to Dispatch</h3>
        </div>
          <div className="bg-[#014DAF] text-white px-2  
          md:py-2 py-2 rounded-[4px] items-center text-[12px] flex gap-2">
            <span className="text-[12px]">
              <FaRegCheckCircle />
            </span>
            <h3>Mark as Acknowledged</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
