import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import furniture1 from '/src/assets/images/furniture1.jpg';

const About = () => {
  const [showWhy, setShowWhy] = useState(true);
  return (
    <div className="min-h-screen w-full  px-4 sm:px-8 lg:px-20 py-12 bg-[#F5EFE6]">
      {/* Container for About + Right section */}
      <div className="flex flex-col lg:flex-row items-start gap-10 max-w-7xl mx-auto">
        {/* Left: About Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-5xl  font-bold text-[#583227]">
            About Us
          </h1>
          <p className="text-[#4A4A4A] text-lg sm:text-xl leading-relaxed">
            At <span className="font-semibold text-[#583227]">Vinay </span> <span className="text-yellow-500 font-bold">Interiors Work</span>, we transform empty walls and raw spaces into
            cozy, stylish, and functional homes. With years of experience in
            <span className="font-medium"> plywood, custom furniture, and interior design</span>, we blend creativity with craftsmanship to bring your vision to life.
          </p>
          {/* More Info - Only show on Desktop */}
          <div className=" text-[#4A4A4A] text-lg leading-relaxed ">
            <img className="p-5" src={furniture1} alt="" />
          </div>
        </div>

        {/* Right: Mission + Why Choose Us + CTA */}
        <div className="w-full lg:w-1/2 space-y-10">
          {/* Mission */}
          <div className="hidden sm:block">
            <h2 className="text-3xl font-bold text-[#583227] mb-2 flex items-center gap-2 pt-20">
              🎯 Our Mission
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed text-2xl font-medium">
              We aim to deliver personalized interiors that reflect your lifestyle and taste — all while maintaining quality, budget, and timely delivery.
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <button
              className="block sm:hidden w-full text-left"
              onClick={() => setShowWhy((prev) => !prev)}
            >
              <h2 className="text-2xl font-bold text-[#583227] mb-4 flex items-center justify-between">
                🤝 Why Choose Us
                <span className="text-xl">{showWhy ? "▲" : "▼"}</span>
              </h2>
            </button>
            <h2 className="hidden sm:block text-2xl font-bold text-[#583227] mb-4">
              🤝 Why Choose Us
            </h2>
            {/* List: hidden on mobile unless open, always visible on sm+ */}
            <AnimatePresence initial={false}>
              {(showWhy || window.innerWidth >= 640) && (
                <motion.ul
                  key="why-list"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#4A4A4A] font-medium ${showWhy ? '' : 'hidden sm:grid'}`}
                >
                  <li className="bg-[#D2B48C] text-2xl font-medium  p-4 rounded-xl shadow text-center"><i className="ri-bard-fill"></i> Premium Materials</li>
                  <li className="bg-[#D2B48C] text-2xl font-medium  p-4 rounded-xl shadow text-center"><i className="ri-custom-size"></i> Custom Designs</li>
                  <li className="bg-[#D2B48C] text-2xl font-medium  p-4 rounded-xl shadow text-center"><i className="ri-price-tag-3-fill"></i> Transparent Pricing</li>
                  <li className="bg-[#D2B48C] text-2xl font-medium  p-4 rounded-xl shadow text-center"><i className="ri-calendar-schedule-fill"></i> Timely Completion</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="pt-2 text-center lg:text-left">
            <p className="text-[#4A4A4A] mb-3 text-lg">
              Based in <span className="text-[#583227] font-semibold">Bhopal</span>, we serve clients across India.
            </p>
            <button className="bg-[#583227] text-white     px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#D2B48C] transition-all">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );                                                                               
};

export default About;