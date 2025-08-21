// components/Navbar.js
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSquareFull } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // breakpoint for mobile
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to determine active class styling
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? "text-blue-500 pb-1"
      : "text-gray-600 hover:text-blue-500 transition-colors duration-300";
  };

  return (
    <nav className="bg-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center max-w-[1400px] h-[80px]">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <FaSquareFull className="text-blue-500 mt-1" />
          <NavLink to="/" className="flex items-center space-x-2">
            <h1 className="text-black text-2xl md:text-3xl font-bold">
              SHIVAM ASTHANA
            </h1>
            {!isMobile && (
              <h2 className="mt-1 text-gray-800 text-sm md:text-lg">
                / WEB DEVELOPER
              </h2>
            )}
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-lg py-4 space-y-4">
          <li>
            <NavLink
              to="/"
              className={getNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              ABOUT ME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={getNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              RESUME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={getNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={getNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
