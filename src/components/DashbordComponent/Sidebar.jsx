"use client";

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
import { useToggle } from "@/Provider";
import Logotwo from "@/components/assests/logotwo.png";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen, toggle } = useToggle();
  const pathname = usePathname();

  return (
    <div  
      className="fixed top-0 left-0 h-full bg-white shadow-md p-4 z-50 
      overflow-y-auto scrollbar-hide w-full flex flex-col justify-between"
    >
      {isSidebarOpen && (
      <button
        className="absolute top-4 right-4 text-xl text-gray-700 lg:hidden"
        onClick={toggle}
      >
       <FiX />
     </button>
      )}

      <div className="mx-auto my-4">
        <Image src={Logo} alt="logo" width={200} height={45} />
      </div>

      <nav className="mt-6 space-y-2 flex-1 mb-8">
        {menuItems.map(({ icon, label, href }, index) => {
          const isActive = pathname === href;
          return (
         <Link href={href} key={index} className="block" onClick={toggle}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-2 px-4 py-2 text-black
             cursor-pointer rounded-md transition-all ${isActive ?
             "bg-[#E2E2E2] text-[#014DAF]" : "hover:bg-[#E2E2E2] hover:text-[#014DAF]"}`}
          >
          <span className="text-[16px]">{icon}</span>
          <h4 className="text-[14px] font-medium font-sans">{label}</h4>
          </motion.div>
        </Link>
          );
        })}
      </nav>
      <div className="mt-auto p-4">
       <Link href="/logout">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-4 py-2 text-black cursor-pointer rounded-md hover:bg-[#E2E2E2] hover:text-[#014DAF]"
        >
          <AiOutlineLogout className="text-[16px]" />
          <h4 className="text-[14px] font-medium font-sans">Logout</h4>
        </motion.div>
        </Link>
        <div className="mt-4">
          <h3 className="text-[8px] text-[#808080] font-medium font-sans b-2">POWERED BY</h3>
          <Image src={Logotwo} width={93.33} height={41.42} alt="logo" />
        </div>
      </div>
    </div>
  );
};

const menuItems = [
  { icon: <HiOutlineHome />, label: "Dashboard", href: "/Dashboard" },
  { icon: <LuBuilding2 />, label: "Branches", href: "/" },
  { icon: <FaUser />, label: "Roles", href: "/" },
  { icon: <FaUsers />, label: "Users", href: "/" },
  { icon: <LuSettings2 />, label: "Card Scheme", href: "/" },
  { icon: <CiCreditCard1 />, label: "Card Profile", href: "/Dashboard/profile" },
  { icon: <MdOutlineCreditScore />, label: "Card Request", href: "/Dashboard/Card" },
  { icon: <PiProjectorScreenChartLight />, label: "Stock", href: "/" },
  { icon: <FaCreditCard />, label: "Card", href: "/" },
  { icon: <FaListUl />, label: "Authorization List", href: "/" },
  { icon: <IoLayers />, label: "Authorization Queue", href: "/" },
  { icon: <CiMap />, label: "Trail", href: "/" },
];

export default Sidebar;
