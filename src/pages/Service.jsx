import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Service = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  if (isMobile) {
    // --------- MOBILE VIEW (Vertical Slider) ---------
    return (
      <div className=" w-full h-screen bg-[#F5EFE6] overflow-hidden flex flex-col items-center justify-center relative">
        {/* Header */}
        <div className="absolute top-6 text-center px- pt-10">
          <h1 className="text-5xl  font-bold text-[#583227]">
            <i className="ri-tools-fill"></i> Our Services
          </h1>
          <p className="text-base p-3 text-[#4A4A4A] font-medium ">
            From concept to completion, we craft beautiful interiors that{" "}
            reflect your unique style and meet your functional needs.
          </p>
        </div>

        {/* Slider */}
        <div className="flex-1 flex justify-center items-center w-full mt-20   relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[#FAF9F6] shadow-md rounded-xl p-6 flex flex-col justify-center items-center w-[90%] h-[70%]"
            >
              <div className="text-[#6B4F3B] text-5xl mb-6">
                {services[index].icon}
              </div>
              <h3 className="text-2xl font-bold text-[#4A4A4A] mb-4 text-center">
                {services[index].title}
              </h3>
              <p className="text-base text-[#4A4A4A] leading-relaxed text-center max-w-md">
                {services[index].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        
          <button
            onClick={handlePrev}
            className=" absolute left-1/2 bottom-40  text-[#583227] text-4xl translate-x-[-50%] hover:text-[#6B4F3B] transition"        
          >
            <i  class="ri-arrow-up-s-line"></i>
            <p className="text-sm font-light ">more</p>
          </button>
        
       
      </div>
    );
  }

  // --------- DESKTOP VIEW (Your original design) ---------
  return (
    <div className="bg-[#F5EFE6] py-16 px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-center text-[#583227] mb-10">
        <i className="ri-tools-fill"></i> Our Services
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#FAF9F6] shadow-md rounded-xl p-6 flex flex-col justify-center items-center"
          >
            <div className="text-[#6B4F3B] text-5xl mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold text-[#4A4A4A] mb-4 text-center">
              {service.title}
            </h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const services = [
  {
    icon: <i className="ri-stack-fill"></i>,
    title: "Plywood & Laminate Work",
    description:
      "Smooth finishes, durable materials, and a wide range of designs to choose from, ensuring your interiors are both stylish and long-lasting.",
  },
  {
    icon: <i className="ri-armchair-fill"></i>,
    title: "Custom Furniture",
    description:
      "Tailored furniture solutions that blend style and functionality, crafted to fit your unique space and taste.",
  },
  {
    icon: <i className="ri-checkbox-multiple-blank-fill"></i>,
    title: "False Ceiling & Wall Design",
    description:
      "Clean lines, modern aesthetics, and innovative designs that transform your space into a work of art.",
  },
  {
    icon: <i className="ri-quill-pen-ai-line"></i>,
    title: "Interior Planning",
    description:
      "From concept to completion, we craft beautiful interiors that reflect your unique style and meet your functional needs.",
  },
  {
    icon: <i className="ri-bowl-fill"></i>,
    title: "Modular Kitchen",
    description:
      "Elegant and functional modular kitchens designed to enhance your cooking experience, with smart storage solutions and modern aesthetics.",
  },
];

export default Service;
