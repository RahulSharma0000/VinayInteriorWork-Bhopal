import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#583227] text-gray-300 py-12 m-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand / Logo */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Vinay<span className="text-yellow-500">Interior Work</span>
            </h2>
            <p className="mt-3 text-sm leading-6">
              Designing spaces that inspire. Bringing your dream interiors to life with elegance and detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
         <ul className="space-y-2 text-sm">
  <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
  <li><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
  <li><Link to="/gallery" className="hover:text-yellow-500">Gallery</Link></li>
  <li><Link to="/services" className="hover:text-yellow-500">Services</Link></li>
  <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
</ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">📍 Vinay Interior Work , Bhopal</p>
            <p className="text-sm">📞 +91 98765 43210</p>
            <p className="text-sm">✉ VinayInteriorWork@gamil.com</p>
            <p className="text-sm">🕒 Mon–Sat, 10 AM – 7 PM</p>
          </div>

    

        </div>

        {/* Social & Copyright */}
        <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-yellow-500">📷</a>
            <a href="#" className="hover:text-yellow-500">📌</a>
            <a href="#" className="hover:text-yellow-500">📘</a>
            <a href="#" className="hover:text-yellow-500">💼</a>
          </div>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">© 2025 InterioCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;