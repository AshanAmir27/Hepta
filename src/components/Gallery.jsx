import React from "react";
import Navbar from "./Navbar"; // Import reusable Navbar component
import asset_7 from "../assets/asset_7.jpeg";
import asset_8 from "../assets/asset_8.jpeg";
import asset_9 from "../assets/asset_9.jpeg";
import asset_10 from "../assets/asset_10.jpeg";
import asset_11 from "../assets/asset_11.jpeg";
import asset_12 from "../assets/asset_12.jpeg";
import asset_13 from "../assets/asset_13.jpeg";
import Footer from "./Footer";

function Gallery() {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        {/* Navbar */}
        <Navbar backgroundTransparent={true} showTitle={true} />

        {/* Hero Section with Background Image */}
        <div className="relative pb-56 w-full text-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${asset_7})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00000033] opacity-50"></div>
          </div>

          {/* Title on top of overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl md:text-7xl text-white font-extrabold mt-36 font-custom">
              Gallery
            </h1>
            <p className="mt-4 text-2xl md:text-4xl font-light text-white">
              A free template by Colorlib. Download and share!
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="w-full md:w-4/5 m-auto p-4">
          {/* First Grid of Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <img src={asset_7} alt="Gallery-image 1" className="object-cover h-full" />
            <img src={asset_8} alt="Gallery-image 2" className="object-cover h-full" />
            <img src={asset_9} alt="Gallery-image 3" className="object-cover h-full" />
            <img src={asset_10} alt="Gallery-image 4" className="object-cover h-full" />
            <img src={asset_11} alt="Gallery-image 5" className="object-cover h-full" />
            <img src={asset_12} alt="Gallery-image 6" className="object-cover h-full" />
            <img src={asset_13} alt="Gallery-image 7" className="object-cover h-full" />
            <img src={asset_11} alt="Gallery-image 8" className="object-cover h-full" />
          </div>

          {/* Second Row of Images */}
          <div className="flex flex-wrap mt-4 gap-4">
            <img
              src={asset_7}
              alt="Gallery-image 9"
              className="object-cover w-full md:w-[49%]"
            />
            <img
              src={asset_13}
              alt="Gallery-image 10"
              className="object-cover w-full md:w-[49%]"
            />
          </div>

          {/* Third Grid of Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
            <img src={asset_7} alt="Gallery-image 11" className="object-cover h-full" />
            <img src={asset_8} alt="Gallery-image 12" className="object-cover h-full" />
            <img src={asset_9} alt="Gallery-image 13" className="object-cover h-full" />
            <img src={asset_10} alt="Gallery-image 14" className="object-cover h-full" />
            <img src={asset_11} alt="Gallery-image 15" className="object-cover h-full" />
            <img src={asset_12} alt="Gallery-image 16" className="object-cover h-full" />
            <img src={asset_13} alt="Gallery-image 17" className="object-cover h-full" />
            <img src={asset_11} alt="Gallery-image 18" className="object-cover h-full" />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Gallery;
