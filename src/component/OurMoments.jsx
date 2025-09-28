// src/components/OurMoments.jsx
import React from "react";

// Import images from assets folder
import moment1 from "../assets/moment-1.avif";
import moment2 from "../assets/moment-6.avif";
import moment3 from "../assets/moment-3img.avif";
import moment4 from "../assets/moment-4.avif";
import moment5 from "../assets/moment-5.avif";
import moment6 from "../assets/moment-6.avif";

const OurMoments = () => {
  return (
    <div className="w-full px-12 py-16 bg-[#FDF1F8]">
      {/* Heading */}
      <div className="mt-12 text-center">
        <h1 className="text-stylish text-5xl text-[#DA2877]">Our Moments</h1>
      </div>

      {/* Images Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div
          className="h-64 shadow-md inline-block overflow-hidden rounded-lg"
          data-aos="flip-up"
        >
          <img
            src={moment1}
            alt="Moment 1"
            className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div
          className="h-64 inline-block overflow-hidden rounded-lg"
          data-aos="flip-up"
        >
          <img
            src={moment2}
            alt="Moment 2"
            className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div
          className="h-64 shadow-md inline-block overflow-hidden rounded-lg"
          data-aos="flip-up"
        >
          <img
            src={moment3}
            alt="Moment 3"
            className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div
          className="h-64 shadow-md inline-block overflow-hidden rounded-lg"
          data-aos="flip-down"
        >
          <img
            src={moment4}
            alt="Moment 4"
            className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div
          className="h-64 shadow-md inline-block overflow-hidden rounded-lg"
          data-aos="flip-down"
        >
          <img
            src={moment5}
            alt="Moment 5"
            className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div
          className="h-64 shadow-md inline-block overflow-hidden rounded-lg"
          data-aos="flip-down"
        >
          <img
            src={moment6}
            alt="Moment 6"
            className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMoments;
