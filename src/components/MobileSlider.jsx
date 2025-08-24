import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileSlider = ({ items }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const handleBack = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#F5EFE6] w-full h-[500px] overflow-hidden rounded-lg">
      <div className="relative w-full h-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={items[index].src}
            alt={items[index].alt || `Slide ${index}`}
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -100 }}
            transition={{ duration: 0.4 }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </AnimatePresence>

        {/* Category label */}
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#583227] text-yellow-400 px-4 py-1 rounded-full text-sm font-semibold shadow">
         🔗 {items[index].category}
        </span>

        {/* Left Button */}
        <button
          onClick={handleBack}
          className="absolute left-0 top-1/2 text-6xl text-black bg-white/30 rounded-full hover:bg-white/50 transition p-1"
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 text-6xl text-black bg-white/30 rounded-full hover:bg-white/50 transition p-1"
        >
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  );
};

export default MobileSlider;