// src/components/Hero.jsx
import React from "react";
import backgroundImg from "../assets/background-img.avif"; // Import image

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex justify-center items-center relative"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <p className="text-2xl font-medium mb-4 text-center">
          We're Getting Married
        </p>

        <h1
          className="text-stylish text-6xl md:text-8xl mb-6 text-center"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Sndp & Riya
        </h1>

        <p className="text-xl text-center">June 15, 2025 • Kolkata, India</p>

        <div className="text-center mt-10" data-aos="fade-down">
          <a
            className="px-6 py-3 bg-[#BD195D] hover:bg-pink-600 rounded-full"
            href="#"
          >
            RSVP
          </a>
          <a
            className="px-6 py-3 border-2 rounded-full border-white hover:bg-white hover:text-pink-600 ml-4"
            href="#"
          >
            Event Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
