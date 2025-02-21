"use client";
import { useToggle } from "@/Provider";
import CardForm from "@/components/DashbordComponent/CardForm";
import React from "react";
import { CiBellOn, CiCreditCard1, CiUser } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { TiCreditCard } from "react-icons/ti";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const page = () => {
  const { toggle } = useToggle();
  return (
    <>
      <div
        className="flex justify-between items-center bg-white border-b border-[#D0D5DD] 
       w-full px-4 py-2 sticky top-0 z-10"
      >
        {/* Toggle Button for Sidebar */}
        <div className="flex gap-2 items-center">
          <button className="lg:hidden text-xl text-[#014DAF]" onClick={toggle}>
            <FiMenu />
          </button>

          {/* Dashboard Title */}
          <div className="flex gap-2 items-center font-sans">
            <span className="text-[12px] font-[400] text-[#475667] font-sans">
              <FaAngleLeft />
            </span>
            <span className="lg:text-[12px] text-[8px] sm:text-[10px] font-[400] text-[#475667] font-sans">
              Back
            </span>
            <span className="text-[12px] font-[400] sm:text-[10px] text-[#475667] font-sans">
              <CiCreditCard1 />
            </span>
            <span className="text-[12px] font-[400] sm:text-[10px] text-[#475667] font-sans">
              <FaAngleRight />
            </span>
            <span className="lg:text-[12px] text-[8px] sm:text-[10px] font-[400] text-[#475667] font-sans">
              Card Request
            </span>
            <span className="text-[12px] font-[400] text-[#475667] font-sans">
              <FaAngleRight />
            </span>
            <span className="lg:text-[12px] text-[8px] sm:text-[10px]  font-[400] text-[#475667] font-sans">
              {" "}
              Request Details
            </span>
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

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-[#F1F7FF]"
        >
        <div className="px-4 mt-6 ">
          <h3 className="text-[18px] font-[700] text-[#101828] font-sans">
            Request Details
          </h3>
          <p className="text-[12px] font-[400] text-[#475667] font-sans">
            Perform predetermined actions on card requests here.
          </p>
          <CardForm />
        </div>
        </motion.div>
      </div>
    </>
  );
};

export default page;
