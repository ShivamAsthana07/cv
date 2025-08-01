// components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FaSquareFull } from "react-icons/fa";

const Navbar = () => {
  // Function to determine active class styling
  const getNavLinkClass = ({ isActive }) => {
    return isActive 
      ? "text-blue-500 pb-1" 
      : "text-gray-600 hover:text-blue-500 transition-colors duration-300";
  };

  return (
    <nav className="bg-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center max-w-[1400px] h-[80px]">
        <div className="flex items-center space-x-2">
          <FaSquareFull className="text-blue-500 mt-1" />
          <NavLink to="/" className="flex items-center space-x-2">
            <h1 className="text-black text-3xl font-bold">SHIVAM ASTHANA</h1>
            <h2 className="mt-1 text-gray-800 text-lg">/ WEB DEVELOPER</h2>
          </NavLink>
        </div>
        
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              ABOUT ME
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={getNavLinkClass}>
              RESUME
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={getNavLinkClass}>
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getNavLinkClass}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
