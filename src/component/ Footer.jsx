// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    // start footer section
    <footer className="w-full px-8 py-12 bg-[#111827] text-white flex justify-center items-center">
      <div className="max-w-6xl mx-auto text-center space-y-7">
        <h1
          className="text-4xl mt-5 text-stylish"
          data-aos="fade-up-right"
        >
          Sndp & Riya
        </h1>
        <p>Thank you for being part of our special day!</p>

        {/* social icons */}
        <div className="flex flex-row justify-center gap-8" data-aos="fade-up-right">
          <FaInstagram className="text-2xl hover:text-pink-700" />
          <FaFacebookF className="text-2xl hover:text-pink-700" />
          <FaTwitter className="text-2xl hover:text-pink-700" />
        </div>

        <p className="text-[#9BA3AF] mt-6">June 15, 2025 • Kolkata, India</p>
      </div>
    </footer>
    // end footer section
  );
};

export default Footer;
