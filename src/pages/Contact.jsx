"use client";// Update the path and filename as needed
import { Mail, Phone, MessageCircle } from "lucide-react";
import contactImg from "../assets/images/contactImg.png"; // Update the path and filename as needed

export default function ContactPage() {
  return (
    <div className=" py-20 min-h-screen flex flex-col lg:flex-row items-center justify-center  lg:px-40 bg-[#F5EFE6] space-y-10 lg:space-y-0 lg:space-x-10">
       


      {/* Left: Contact Info */}
      <div className="w-full  lg:w-1/2 space-y-6 px-5">
        <h2 className="text-4xl font-bold  text-center text-[#583227] ">Get In Touch </h2>
        
        {/* Email */}
        <a
          href="mailto:yourmail@example.com"
          className="flex items-center space-x-3 bg-[#4e72f7] p-8 rounded-lg shadow hover:bg-yellow-500 transition hover:text-black hover:scale-105"
        >
          <Mail className="w-6 h-6 text-white" />
          <h3 className="text-xl text-white font-bold ">Email us</h3>

        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919752278990"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-[#369404] p-8 rounded-lg shadow hover:bg-yellow-500 transition hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <h3 className="text-xl text-white  font-bold  ">Msg us on WhatsApp</h3>
        </a>

        {/* Call */}
        <a
          href="tel:+919752278990"
          className="flex items-center space-x-3 bg-[#583227] p-8 rounded-lg shadow hover:bg-yellow-500 transition hover:scale-105"
        >
          <Phone className="w-6 h-6 text-white" />
          <h3 className="text-xl text-white  font-bold  ">Call us Directly </h3>
        </a>
      </div>

      {/* Right: Work Image (hidden on mobile) */}
      <div className="hidden lg:flex pt-15 w-full lg:w-1/2 justify-center items-center">
        <img 
          src={contactImg}
          alt="My Work"
          width={800}
          height={800}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
