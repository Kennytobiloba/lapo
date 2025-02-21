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

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen , toggle } = useToggle();

  return (
    <div className="fixed top-0 left-0 h-full  bg-white shadow-md p-4 z-50 overflow-y-auto w-full">
      {/* Close Button for Mobile */}
      {isSidebarOpen && (
        <button
          className="absolute top-4 right-4 text-xl text-gray-700 lg:hidden"
          onClick={toggle}
        >
          <FiX />
        </button>
      )}

      {/* Logo */}
      <div className="relative w-[138px] h-[45px] mx-auto my-4">
          <Image src={Logo} alt="logo" fill />
        </div>

      {/* Navigation Links */}
      <nav className="mt-6 space-y-2">
        {menuItems.map(({ icon, label, href }, index) => (
          <Link href={href} key={index} className="block" onClick={() => setIsSidebarOpen(false)}>
            <div className="flex items-center gap-2 px-4 py-2 text-black cursor-pointer hover:bg-[#E2E2E2] hover:text-[#014DAF] rounded-md">
              <span className="text-[16px]">{icon}</span>
              <h4 className="text-[14px] font-medium font-sans">{label}</h4>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

const menuItems = [
  { icon: <HiOutlineHome />, label: "Dashboard", href: "/Dashboard" },
  { icon: <LuBuilding2 />, label: "Branches", href: "/Dashboard" },
  { icon: <FaUser />, label: "Roles", href: "/Dashboard" },
  { icon: <FaUsers />, label: "Users", href: "/Dashboard" },
  { icon: <LuSettings2 />, label: "Card Scheme", href: "/Dashboard" },
  { icon: <CiCreditCard1 />, label: "Card Profile", href: "/Dashboard/profile" },
  { icon: <MdOutlineCreditScore />, label: "Card Request", href: "/Dashboard/Card" },
  { icon: <PiProjectorScreenChartLight />, label: "Stock", href: "/Dashboard" },
  { icon: <FaCreditCard />, label: "Card", href: "/Dashboard" },
  { icon: <FaListUl />, label: "Authorization List", href: "/Dashboard" },
  { icon: <IoLayers />, label: "Authorization Queue", href: "/Dashboard" },
  { icon: <CiMap />, label: "Trail", href: "/Dashboard" },
  { icon: <AiOutlineLogout />, label: "Logout", href: "/Dashboard" },
];

export default Sidebar;
