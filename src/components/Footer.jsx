import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function Footer() {
  return (
    <div className="w-full bg-black mt-5 py-10 flex flex-col items-center justify-center">
      {/* Inner Container */}
      <div className="w-4/5 pt-5 flex flex-col lg:flex-row justify-between text-white mb-10 space-y-10 lg:space-y-0">
        {/* First Row */}
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-44">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-custom">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Help</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Rooms</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-bold mb-4 font-custom text-xl">Support</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Our Location</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">The Hosts</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Restaurant</a></li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-48">
          {/* Contact Info Section */}
          <div>
            <h3 className="font-bold mb-4 font-custom text-xl">Contact Info</h3>
            <p className="font-custom">Address:</p>
            <p className="text-gray-400">98 West 21st Street, Suite 721</p>
            <p className="pb-3 text-gray-400">New York NY 10016</p>
            <p className="pb-3 font-custom">Phone: <span className="text-gray-400">(+1) 435 3533</span></p>
            <p className="font-custom">Email: <a href="mailto:info@yourdomain.com" className="text-gray-400 hover:text-red-500 transition duration-200">info@yourdomain.com</a></p>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="font-bold mb-4 font-custom text-xl">Subscribe</h3>
            <p className="mb-4">Sign up for our newsletter</p>
            <form action="">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 w-48"
                required
              />
              <button type="submit" className="ml-2 px-3 py-2 bg-red-500 text-white rounded-md">
                <IoIosSend className="text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="w-full border-t-1 border-slate-600" />

      {/* Social Media Links */}
      <div className="flex space-x-6 mt-6 mb-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
          <FaLinkedin />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
          <FaYoutube />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="text-gray-500 text-center pb-5">
        <p>Copyright © 2024 All rights reserved | This template is made with <span className="text-red-500">♥</span> by Colorlib</p>
      </div>
    </div>
  );
}

export default Footer;
