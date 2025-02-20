"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assests/logo.png";
import { FiX } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi2";
import { LuBuilding2, LuSettings2 } from "react-icons/lu";
import { FaCreditCard, FaListUl, FaUser, FaUsers } from "react-icons/fa6";
import { CiCreditCard1, CiMap } from "react-icons/ci";
import { MdOutlineCreditScore } from "react-icons/md";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { IoLayers } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const handleItemClick = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className="relative">
      {/* Sidebar for Small Screens with Motion */}
      {isOpen && (
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          exit={{ x: -250 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 h-full w-60 bg-white shadow-md p-4 z-50 md:hidden overflow-y-auto"
        >
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-xl text-gray-700" onClick={() => setIsOpen(false)}>
            <FiX />
          </button>

          <SidebarContent onItemClick={handleItemClick} />
        </motion.div>
      )}

      {/* Sidebar for Larger Screens (Always Visible) */}
      <div className="hidden lg:block fixed top-0 left-0 h-screen w-60 bg-white shadow-md p-4 overflow-y-auto">
        <div className="relative w-[138px] h-[45px] mx-auto my-4">
          <Image src={Logo} alt="logo" fill />
        </div>
        <SidebarContent onItemClick={() => {}} />
      </div>
    </div>
  );
};

const SidebarContent = ({ onItemClick }) => (
  <nav className="mt-6 space-y-2">
    <SidebarItem icon={<HiOutlineHome />} label="Dashboard" href="/" onClick={onItemClick} />
    <SidebarItem icon={<LuBuilding2 />} label="Branches" href="/branches" onClick={onItemClick} />
    <SidebarItem icon={<FaUser />} label="Roles" href="/roles" onClick={onItemClick} />
    <SidebarItem icon={<FaUsers />} label="Users" href="/users" onClick={onItemClick} />
    <SidebarItem icon={<LuSettings2 />} label="Card Scheme" href="/card-scheme" onClick={onItemClick} />
    <SidebarItem icon={<CiCreditCard1 />} label="Card Profile" href="/Dashboard/profile" onClick={onItemClick} />
    <SidebarItem icon={<MdOutlineCreditScore />} label="Card Request" href="/card-request" onClick={onItemClick} />
    <SidebarItem icon={<PiProjectorScreenChartLight />} label="Stock" href="/stock" onClick={onItemClick} />
    <SidebarItem icon={<FaCreditCard />} label="Card" href="/card" onClick={onItemClick} />
    <SidebarItem icon={<FaListUl />} label="Authorization List" href="/authorization-list" onClick={onItemClick} />
    <SidebarItem icon={<IoLayers />} label="Authorization Queue" href="/authorization-queue" onClick={onItemClick} />
    <SidebarItem icon={<CiMap />} label="Trail" href="/trail" onClick={onItemClick} />

    {/* Logout Button */}
    <SidebarItem icon={<AiOutlineLogout />} label="Logout" href="/logout" onClick={onItemClick} />
  </nav>
);

const SidebarItem = ({ icon, label, href, onClick }) => (
  <Link href={href} className="block">
    <div
      className="flex items-center gap-2 px-4 py-2 text-black cursor-pointer hover:bg-[#E2E2E2] hover:text-[#014DAF] rounded-md"
      onClick={onClick}
    >
      <span className="text-[16px]">{icon}</span>
      <h4 className="text-[14px] font-medium font-sans">{label}</h4>
    </div>
  </Link>
);

export default Sidebar;
