// src/components/WeddingEvents.jsx
import React from "react";
import {
  FaUserTie,
  FaHandSparkles,
  FaCalendar,
  FaClock,
  FaLocationDot,
  FaChampagneGlasses,
} from "react-icons/fa6";

// 🖼️ Import image from assets folder
import weddingLocationImg from "../assets/wedding-location.avif";

const WeddingEvents = () => {
  return (
    // start Wedding Events and our venue location section
    <div className="w-full bg-white p-14">
      <div className="text-center mt-4">
        <h1
          className="text-5xl text-stylish text-[#DA2877]"
          data-aos="flip-right"
        >
          Wedding Events
        </h1>
      </div>

      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-12 mt-16">
        {/* card Wedding Ceremony */}
        <div
          className="bg-[#FDF1F8] p-8 text-center rounded-lg shadow-md"
          data-aos="flip-up"
        >
          <div className="w-20 h-20 bg-[#FBE7F2] rounded-full flex justify-center items-center mx-auto">
            <FaUserTie className="text-3xl text-[#DA2877]" />
          </div>
          <h1 className="text-2xl font-semibold mt-4">Wedding Ceremony</h1>
          <p className="mt-4 text-[#374151]">
            Join us as we exchange vows and celebrate our commitment.
          </p>
          <p className="font-medium mt-2">
            <FaCalendar className="inline text-[#374151]  mr-2" />
            June 15, 2025
          </p>
          <p className="font-medium mt-2">
            <FaClock className="inline text-[#374151] mr-2" />
            10:00 AM - 12:00 PM
          </p>
          <p className="font-medium mt-2">
            <FaLocationDot className="inline text-[#374151] mr-2" />
            Taj Bengal, Kolkata
          </p>
        </div>

        {/* card Wedding Reception */}
        <div
          className="bg-[#FDF1F8] p-8 text-center rounded-lg shadow-md"
          data-aos="flip-up"
        >
          <div className="w-20 h-20 bg-[#FBE7F2] rounded-full flex justify-center items-center mx-auto">
            <FaChampagneGlasses className="text-3xl text-[#DA2877]" />
          </div>
          <h1 className="text-2xl font-semibold mt-4">Wedding Reception</h1>
          <p className="mt-4 text-[#374151]">
            Celebrate our new beginning with dinner, dancing and joy!
          </p>
          <p className="font-medium mt-2">
            <FaCalendar className="inline text-[#374151]  mr-2" />
            June 15, 2025
          </p>
          <p className="font-medium mt-2">
            <FaClock className="inline text-[#374151] mr-2" />
            6:00 PM - 11:00 PM
          </p>
          <p className="font-medium mt-2">
            <FaLocationDot className="inline text-[#374151] mr-2" />
            The Oberoi Grand, Kolkata
          </p>
        </div>

        {/* card Mehndi Ceremony */}
        <div
          className="bg-[#FDF1F8] p-8 text-center rounded-lg shadow-md"
          data-aos="flip-up"
        >
          <div className="w-20 h-20 bg-[#FBE7F2] rounded-full flex justify-center items-center mx-auto">
            <FaHandSparkles className="text-3xl text-[#DA2877]" />
          </div>
          <h1 className="text-2xl font-semibold mt-4">Mehndi Ceremony</h1>
          <p className="mt-4 text-[#374151] tracking-tight">
            Join the bride for traditional henna application and celebrations.
          </p>
          <p className="font-medium mt-2">
            <FaCalendar className="inline text-[#374151]  mr-2" />
            June 13, 2025
          </p>
          <p className="font-medium mt-2">
            <FaClock className="inline text-[#374151] mr-2" />
            3:00 PM - 7:00 PM
          </p>
          <p className="font-medium mt-2">
            <FaLocationDot className="inline text-[#374151] mr-2" />
            Hoodati Residence, Kolkata
          </p>
        </div>
      </div>

      {/* venue location */}
      <div className="mt-16 text-center">
        <h1 className="text-2xl font-semibold">Venue Location</h1>
      </div>

      {/* wedding location img */}
      <div
        className="w-full h-60 mx-auto mt-2"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img
          className="w-full h-full object-cover rounded-md mt-4"
          src={weddingLocationImg}
          alt="Wedding Venue"
        />
      </div>
    </div>
    // End Wedding Events and our venue location section
  );
};

export default WeddingEvents;
