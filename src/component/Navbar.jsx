// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import cross icon
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full fixed z-50 bg-opacity-90" data-aos="fade-down">
      <nav className="flex justify-between items-center bg-[#F0EFEE] py-4 px-6 relative">
        {/* Logo */}
        <div className="text-[#DA2877] text-stylish text-2xl font-bold" data-aos="fade-right">
          R & S
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#DA2877] text-lg focus:outline-none"
          data-aos="fade-left"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2 md:space-x-8" data-aos="fade-down">
          <li className="text-gray-800 text-base hover:text-[#DA2877]"><a href="#">Home</a></li>
          <li className="text-gray-800 text-base hover:text-[#DA2877]"><a href="#">Couple</a></li>
          <li className="text-gray-800 text-base hover:text-[#DA2877]"><a href="#">Event</a></li>
          <li className="text-gray-800 text-base hover:text-[#DA2877]"><a href="#">Gallery</a></li>
          <li className="text-gray-800 text-base hover:text-[#DA2877]"><a href="#">RSVP</a></li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col absolute top-16 left-0 w-full bg-[#BD195D] rounded-b-3xl text-white" data-aos="fade-down">
            <li className="py-2 ml-2 hover:underline transition duration-300"><a href="#">Home</a></li>
            <li className="py-2 ml-2 hover:underline transition duration-300"><a href="#">Couple</a></li>
            <li className="py-2 ml-2 hover:underline transition duration-300"><a href="#">Event</a></li>
            <li className="py-2 ml-2 hover:underline transition duration-300"><a href="#">Gallery</a></li>
            <li className="py-2 ml-2 hover:underline transition duration-300"><a href="#">RSVP</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
