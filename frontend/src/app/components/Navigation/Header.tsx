"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">🚀 Secure Slack</h1>

        {/* Menu button for small screens */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Nav for medium & above */}
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/components/News" className="hover:underline">News</Link></li>
            <li><Link href="/components/Resources" className="hover:underline">Resources</Link></li>
            {user ? (
              <li><button onClick={logout} className="hover:underline">Logout</button></li>
            ) : (
              <li><Link href="/login" className="hover:underline">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden mt-4 absolute z-40 right-10 bg-gray-800 rounded-xl border-2 w-40" >
          <ul className="flex flex-col gap-5   py-3  ">
            <div className="w-4/5 hover:border-b-2 ml-5 hover:"><li className="w-1/2 mx-auto"><Link href="/" className="p-2" onClick={() => setIsOpen(false)}>Home</Link></li></div>
            <div className="w-4/5 hover:border-b-2 ml-5"> <li className="w-1/2 mx-auto"><Link  href="/blog" className=" p-2 " onClick={() => setIsOpen(false)}>Blog</Link></li></div>
            <div className="w-4/5 hover:border-b-2 ml-5">  <li className="w-1/2 mx-auto"><Link href="/components/News" className=" p-2 " onClick={() => setIsOpen(false)}>News</Link></li></div>
            <div className="w-4/5 hover:border-b-2 ml-5"><li className="w-1/2 mx-auto"><Link href="/components/Resources" className=" p-2 " onClick={() => setIsOpen(false)}>Resources</Link></li></div>
            <div className="w-4/5 hover:border-b-2 ml-5">  {user ? (
              <li className="w-1/2 mx-auto"><button onClick={() => { logout(); setIsOpen(false); }} className="hover:underline p-2 ">Logout</button></li>
            ) : (
              <li className="w-1/2 mx-auto"><Link href="/login" className="hover:underline p-2 " onClick={() => setIsOpen(false)}>Login</Link></li>
            )}</div>
          </ul>
        </nav>
      )}
    </header>
  );
}
