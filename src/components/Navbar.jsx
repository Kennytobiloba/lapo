import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className="bg-[#002f6c] text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">Lapo</div>
      
      {/* Navigation Links */}
      <div className="space-x-6">
        <a href="#home" className="hover:underline">Home</a>
        <Link  href="/Dashboard" className="hover:underline">Dashboard</Link>
        <a href="#complaint" className="hover:underline">Make a Complaint</a>
      </div>
    </nav> 
    </div>
  )
}

export default Navbar