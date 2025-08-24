import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mandir from "../assets/images/mandir.jpg";
import ceiling from "../assets/images/celling.jpg";
import tv from "../assets/images/tv.jpg";
import kitchen from "../assets/images/kitchen.jpg";
import wardrobe3 from "../assets/images/wardrobe3.jpg";
import wardrabe2 from "../assets/images/wardrobe2.jpg";
import furniture1 from "../assets/images/furniture1.jpg";

const images = [mandir, tv,ceiling, kitchen,furniture1, wardrobe3, ];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handleBack = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
  <div className="relative flex flex-col items-center justify-center bg-[#F5EFE6] w-full  overflow-hidden rounded-lg  h-[500px] ">
  <div className="relative w-full h-full flex justify-center items-center">
    <AnimatePresence mode="wait">
      <motion.img
        key={index}
        src={images[index]}
        alt={`Slide ${index}`}
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

    {/* Left Button */}

    
    <button
      onClick={handleBack}
      className="absolute left-[0] top-1/2 text-6xl text-black  bg-white/30 rounded-full hover:bg-white/50 transition p-1"
    >
      <i class="ri-arrow-left-s-line"></i>
    </button>

    {/* Right Button */}
    <button
      onClick={handleNext}
      className="absolute right-[0] top-1/2 text-6xl text-black  bg-white/30 rounded-full hover:bg-white/50 transition p-1"
    >
     <i class="ri-arrow-right-s-line"></i>
    </button>
  </div>
</div>

  );
};

export default ImageSlider;
