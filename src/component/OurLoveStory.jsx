// src/components/OurLoveStory.jsx
import React from "react";
import boyImg from "../assets/boy-img.avif";
import girlImg from "../assets/girls-img.avif";

const OurLoveStory = () => {
  return (
    <div
      className="max-w-full mx-auto bg-[#FDF1F8] py-18 px-8"
      data-aos="fade-up"
    >
      <div>
        <h1 className="text-center text-5xl text-stylish text-[#DA2877]" data-aos="fade-up">
          Our Love Story
        </h1>
      </div>

      {/* Mr. and Mrs. intro */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12"
        data-aos="fade-up"
      >
        {/* Mr. Sndp */}
        <div className="text-center" data-aos="fade-right">
          <div className="w-64 h-64 relative inline-block" data-aos="zoom-in">
            <img
              src={boyImg}
              alt="man-img"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-4 text-stylish" data-aos="fade-up">
            Sndp Bag
          </h1>
          <p className="text-[#374151] mt-2 text-stylish font-bold" data-aos="fade-up">
            Son of Mr. & Mrs. Bag
          </p>
          <p className="text-[#374151] mt-6 text-stylish tracking-wider text-xl" data-aos="fade-up">
            Sndp is a software engineer with a passion for music and travel.
            He <br className="hidden md:inline" /> loves exploring new hiking trails
            and is known for his infectious
            <br className="hidden md:inline" /> laugh.
          </p>
        </div>

        {/* Mrs. Riya */}
        <div className="text-center" data-aos="fade-left">
          <div className="w-64 h-64 relative inline-block" data-aos="zoom-in">
            <img
              src={girlImg}
              alt="girl-img"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold mt-4 text-stylish" data-aos="fade-up">
            Riya Hoodati
          </h1>
          <p className="text-[#374151] mt-2 text-stylish font-semibold " data-aos="fade-up">
            Daughter of Mr. & Mrs. Hoodati
          </p>
          <p className="text-[#374151] mt-6 text-stylish tracking-wider text-xl" data-aos="fade-up">
            Riya is a marketing executive who loves painting and baking. She's
            <br className="hidden md:inline" /> known for her creativity and the way she
            lights up any room with her smile.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center max-w-3xl mx-auto" data-aos="fade-up">
        <p className="text-[#374151] text-stylish  text-xl md:text-2xl tracking-wider">
          We met 5 years ago during a friend's birthday party and instantly
          connected. After years of friendship that blossomed into love, Sndp
          proposed at the same spot where we first met. We've been on countless
          adventures together and can't wait to begin our greatest journey yet!
        </p>
      </div>
    </div>
  );
};

export default OurLoveStory;
