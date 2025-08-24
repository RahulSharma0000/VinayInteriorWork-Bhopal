import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex fixed top-0 left-0 w-full z-50 justify-between items-center bg-[#583227] text-white p-5 ">
        <div>
          <h1 className="text-2xl font-medium text-white">
            Vinay <span className='text-yellow-500'>Interior Work</span>
          </h1>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-10 text-lg font-semibold text-white">
            <li><Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-yellow-500 transition-colors">Services</Link></li>

            <li><Link to="/gallery" className="hover:text-yellow-500 transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
          </ul>
        </div>
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          &#9776;
        </button>
      </nav>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-row">
          {/* Blurred Overlay on the left */}
          <div
            className="w-1/2 h-full bg-black/10 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          ></div>
          {/* Sidebar on the right */}
          <div className="w-1/2 bg-[#583227] text-white p-8 flex flex-col space-y-8 h-full text-2xl font-semibold hover:cursor-pointer">
            <button
              className="self-end text-3xl mb-8"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition-colors">Home</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition-colors">Services</Link>

            <Link to="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition-colors">Gallery</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition-colors">About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;