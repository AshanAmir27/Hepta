import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import asset_7 from "../assets/asset_7.jpeg";
import asset_8 from "../assets/asset_8.jpeg";
import asset_9 from "../assets/asset_9.jpeg";
import asset_10 from "../assets/asset_10.jpeg";
import asset_11 from "../assets/asset_11.jpeg";
import asset_12 from "../assets/asset_12.jpeg";
import Footer from "./Footer";
import Navbar from "./Navbar"; // Import the Navbar component

import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const newsItems = [
  { src: asset_7, date: "February 26, 2018", category: "Travel" },
  { src: asset_7, date: "February 26, 2018", category: "Travel" },
  { src: asset_8, date: "February 26, 2018", category: "Lifestyle" },
  { src: asset_8, date: "February 26, 2018", category: "Lifestyle" },
  { src: asset_8, date: "February 26, 2018", category: "Lifestyle" },
  { src: asset_9, date: "February 26, 2018", category: "Travel" },
  { src: asset_9, date: "February 26, 2018", category: "Travel" },
  { src: asset_10, date: "February 26, 2018", category: "Technology" },
  { src: asset_10, date: "February 26, 2018", category: "Technology" },
  { src: asset_11, date: "February 26, 2018", category: "Lifestyle" },
  { src: asset_12, date: "February 26, 2018", category: "Health" },
  { src: asset_12, date: "February 26, 2018", category: "Health" },
];

const categories = ["All", "Travel", "Lifestyle", "Technology", "Health"];

function News() {
  const itemsPerPage = 4; // Number of news items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter news items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  // Get the items to display for the current page
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );



    // Initialize AOS when the component mounts
    useEffect(() => {
      AOS.init({
        duration: 1000,  // Global animation duration
        once: true,      // Whether animation should happen only once
      });
    }, []);

  return (
    <div className="bg-gray-100">
      <div className="relative">
        {/* Use the Navbar component */}
        <Navbar />

        {/* Background Image with Overlay */}
        <div className="relative pb-56 w-full text-center"  >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${asset_7})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00000033] opacity-50"></div>
          </div>

          {/* Content on top of overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-extrabold mt-36 font-custom">
              Blog
            </h1>
            <p className="mt-4 text-xl md:text-2xl lg:text-4xl font-light text-white">
              A free template by Colorlib. Download and share!
            </p>
          </div>
        </div>

        <section className="w-full md:w-4/5 m-auto pt-16 lg:pt-24 flex flex-col lg:flex-row">
          <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-3/5" >
            {/* Render current news items based on the current page */}
            {currentItems.map((item, index) => (
              <a
                key={index}
                href="/"
                className="cursor-pointer   hover:no-underline"

                data-aos="fade-up"
              >
                <div className="mb-6">
                  <div className="w-full">
                    <img
                      src={item.src}
                      alt="news"
                      className="w-full h-48 md:h-56 object-cover rounded-md"
                    />
                  </div>
                  <div className="bg-white p-4 mt-2 rounded-md">
                    <p className="text-md text-gray-400 font-custom">
                      {item.date}
                    </p>
                    <h1 className="text-xl md:text-2xl font-bold font-custom">
                      Free Template by Colorlib
                    </h1>
                  </div>
                </div>
              </a>
            ))}

            {/* Pagination */}
            <div className="flex gap-2 mt-4 justify-center w-full">
              {Array.from(
                { length: Math.ceil(filteredItems.length / itemsPerPage) },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`rounded-full p-2 w-10 h-10 flex items-center justify-center 
                    ${
                      currentPage === index + 1
                        ? "bg-cyan-300"
                        : "bg-white"
                    } shadow-md`}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[370px] mt-12 lg:mt-[-24px] lg:ml-16 p-6 bg-gray-50 rounded-lg">
            {/* Search Box */}
            <div className="relative w-full p-4 bg-white shadow-md rounded-md">
              <FaSearch className="absolute left-9 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pt-2 pb-2 text-black rounded-md border border-gray-300 focus:outline-none focus:border-[#65c0ba]"
              />
            </div>

            {/* Popular Posts */}
            <div className="p-4 bg-white mt-6 shadow-md rounded-md">
              <h1 className="pb-4 font-bold font-custom">Popular Post</h1>
              {[asset_7, asset_8, asset_9, asset_10, asset_11].map(
                (src, index) => (
                  <div className="flex mb-4" key={index}>
                    <img
                      src={src}
                      alt=""
                      className="w-[80px] h-[60px] object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <p className="text-gray-500 text-sm">
                        February 27, 2018
                      </p>
                      <a
                        href="/"
                        className="font-bold text-md hover:text-cyan-600 transition"
                      >
                        Free Template by Colorlib
                      </a>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Categories */}
            <div className="p-4 bg-white mt-6 shadow-md rounded-md">
              <h1 className="pb-4 font-bold font-custom">Categories</h1>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="mb-2">
                    <button
                      className={`block text-left w-full hover:text-cyan-600 transition duration-200 ${
                        selectedCategory === category ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1); // Reset to the first page when category changes
                      }}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default News;
