import React from "react";
import { FaSquareFull } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center max-w-[1400px] h-[80px]">
        <div className="flex items-center space-x-2">
          <FaSquareFull className="text-blue-500 mt-1" />
          <h1 className="text-black text-3xl font-bold">SHIVAM ASTHANA </h1>
          <h2 className="mt-1 text-gray-800 text-lg"> / WEB DEVELOPER</h2>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-gray-600 hover:text-blue-500">ABOUT ME</a>
          </li>
          <li>
            <a href="#resume" className="text-gray-600 hover:text-blue-500">RESUME</a>
          </li>
          <li>
            <a href="#experience" className="text-gray-600 hover:text-blue-500">WORK EXPERIENCE</a>
          </li>
          <li>
            <a href="#projects" className="text-gray-600 hover:text-blue-500">PROJECTS</a>
          </li>
          <li>
            <a href="#projects" className="text-gray-600 hover:text-blue-500">CONTACT</a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
