import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between py-3 items-center bg-black text-white">
        <Link href="/" passHref><p className="font-bold text-xl ml-5 cursor-pointer hover:text-blue-300">BIO HUNTER</p></Link>
        <ul className="flex space-x-10 font-medium mr-6">
          <Link href="/" passHref>
            <li className="hover:text-blue-400 cursor-pointer font-semibold">Home</li>
          </Link>
          <Link href="/Blogs" passHref>
            <li className="hover:text-blue-400 cursor-pointer font-semibold">Blogs</li>
          </Link>
          <Link href="/About" passHref>
            <li className="hover:text-blue-400 cursor-pointer font-semibold">About</li>
          </Link>
          <Link href="/Contact" passHref>
            <li className="hover:text-blue-400 cursor-pointer font-semibold">Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar
