import React, { useState } from "react";

import MobileSlider from "../components/MobileSlider";

// Local image imports
import kitchen1 from "../assets/images/kitchen.jpg";
import kitchen2 from "../assets/images/kitchen2.jpg";
import kitchen5 from "../assets/images/kitchen5.jpg";
import kitchen4 from "../assets/images/kitchen4.jpg";
import celling1 from "../assets/images/celling.jpg";
import celling2 from "../assets/images/celling2.jpg";
import celling3 from "../assets/images/celling3.jpg";
import celling4 from "../assets/images/celling4.jpg";
import furniture1 from "../assets/images/furniture1.jpg";
import furniture2 from "../assets/images/furniture2.jpg";
import furniture3 from "../assets/images/furniture3.jpg";
import furniture4 from "../assets/images/furniture4.jpg";
import wardrobe1 from "../assets/images/wardrobe1.jpg";
import wardrobe2 from "../assets/images/wardrobe2.jpg";
import wardrobe3 from "../assets/images/wardrobe2.jpg";
import wardrobe4 from "../assets/images/wardrobe4.jpg";
import wall from "../assets/images/wall.jpg";
import wall2 from "../assets/images/wall2.jpg";
import wall3 from "../assets/images/wall3.jpg";
import tv from "../assets/images/tv.jpg";
import tv2 from "../assets/images/tv2.jpg"; 
import tv3 from "../assets/images/tv3.jpg"; 
import tv4 from "../assets/images/tv4.jpg"; 
import tv5 from "../assets/images/tv5.jpg"; 



// Gallery items with categories
const galleryItems = [
  { src: kitchen1, category: "Kitchen" },
    { src: wardrobe1, category: "wardrobe" },
  { src: kitchen2, category: "Kitchen" },
   {src:tv4, category: "TV unit"},
    { src: furniture1, category: "Furniture" },
     {src:tv2, category: "TV unit"},
      { src: wall, category: "wall" },
   { src: kitchen5, category: "Kitchen" },
  { src: kitchen4, category: "Kitchen" },
  { src: celling1, category: "ceiling" },
  { src: celling2, category: "ceiling" },
  { src: celling3, category: "ceiling" },
  { src: celling4, category: "ceiling" },

  { src: wall2, category: "wall" },
  { src: wall3, category: "wall" },
 
  { src: furniture2, category: "Furniture" },
  { src: furniture3, category: "Furniture" },
  { src: furniture4, category: "Furniture" },

  { src: wardrobe2, category: "wardrobe" },
  { src: wardrobe3, category: "wardrobe" },
  { src: wardrobe4, category: "wardrobe" },
  {src:tv, category: "TV unit"},
 
  {src:tv3, category: "TV unit"},
 
  {src:tv5, category: "TV unit"},
];

const categories = ["All", "Kitchen", "ceiling", "wall", "Furniture" , "wardrobe","TV unit"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, 8);

  return (
    <div className="bg-[#F5EFE6] w-full min-h-60 px-10 relative pt-20">
      <h1 className="text-5xl md:text-5xl text-[#583227] font-bold pb-5 text-center">
        Our Works
      </h1>

      {/* Filter Buttons */}
<div className="hidden md:flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setShowAll(false); // Reset when filter changes
            }}
            className={`px-4 py-2 rounded-full font-medium border 
              ${
                selectedCategory === cat
                  ? "bg-[#6B4F3B] text-white border-[#6B4F3B]"
                  : "bg-white text-[#4A4A4A] border-[#D7CCC0] hover:bg-[#f0eae2]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

     
{/* 🖥️ Desktop Grid Gallery */}
<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  p-5">
  {itemsToShow.map((item, index) => (
    <div
      key={index}
      className="bg-[#ffff] p-2 rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(107,79,59,0.2)] hover:shadow-[0_10px_25px_rgba(107,79,59,0.3)] transition duration-300 hover:scale-x-105 hover:scale-y-105"
    >
      <img
        src={item.src}
        alt={`Project ${index + 1}`}
        className="w-full h-50 object-cover rounded-md"
      />
      <div className="py-4 px-1">
      
        <span className="text-sm font-bold text-[#ffff] flex items-center justify-center uppercase tracking-wide bg-[#6B4F3B]  py-1 rounded-md">
         {item.category}
        </span>
      </div>
    </div>
  ))}
</div>

      {/* 📱 Mobile Slider Gallery */ }
      <div className="lg:hidden w-full h-full lg:w-1/2 flex justify-center items-center  lg:mt-10">
         <MobileSlider items={itemsToShow} />  </div>
    
    </div>
  );
};

export default Gallery;
