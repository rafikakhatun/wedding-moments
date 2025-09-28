// src/components/JoinCelebration.jsx
import React from "react";

const JoinCelebration = () => {
    return (
        <>
            {/* start Join Our Celebration / send RSVP section form */}
            <div className="mt-12 text-center">
                <h1
                    className="text-stylish text-5xl text-[#DA2877]"
                    data-aos="zoom-in-left"
                >
                    Join Our Celebration
                </h1>
            </div>

            {/* full div */}
            <div className="w-full py-14 px-10 bg-white">
                {/* form container */}
                <div
                    className="max-w-3xl bg-[#FDF1F8] mx-auto p-8 mt-5 rounded-xl shadow-md "
                    data-aos="zoom-in-right"
                >
                    <div className="mt-2">
                        <h1 className="text-center text-md text-[#374151] tracking-tight">
                            We would be honored to have you join us on our special day.
                            Please let us know if you'll{" "}
                            <br className="hidden md:block" /> be able to attend by filling
                            out the form below.
                        </h1>
                    </div>

                    <form action="" className="space-y-6 mt-6 text-[#374151] ">
                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4">
                            {/* name field */}
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="fullname">Full Name</label>
                                <input
                                    id="fullname"
                                    className="px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                    type="text"
                                />
                            </div>

                            {/* Email field */}
                            <div className="flex flex-col space-y-2 mt-3 md:mt-0">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    className="px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                    type="email"
                                />
                            </div>
                        </div>

                        {/* Number of Guest */}
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="guest">Number of Guests</label>
                            <select
                                className="px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                id="guest"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                        {/* attend section */}
                        <label htmlFor="attend">Will you attend</label>
                        <div id="attend" className="space-x-3 mt-2">
                            <label>
                                <input type="radio" name="attend" value="yes" />
                                <span className="text-black"> Joyfully Accept</span>
                            </label>

                            <label>
                                <input type="radio" name="attend" value="no" />
                                <span className="text-black"> Regretfully Decline</span>
                            </label>
                        </div>

                        {/* message for couple */}
                        <div>
                            <label htmlFor="message">Message for the Couple (Optional)</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="mt-2 w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
                            ></textarea>
                        </div>

                        {/* button */}
                        <div className="flex justify-center items-center">
                            <button className="px-8 py-3 bg-[#DA2877] rounded-3xl hover:bg-pink-500 text-white">
                                Send RSVP
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* end Join Our Celebration Section */}
        </>
    );
};

export default JoinCelebration;
