import React,{useEffect} from "react";
import Navbar from "./Navbar";
import Experience from "./Experience";
import Tour from "./Tour";
import RoomType from "./RoomType";
import asset_7 from "../assets/asset_7.jpeg";
import Footer from "./Footer";
import RecentBlog from "./RecentBlog";

import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles


function Hotels() {

  
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
        {/* Navbar */}
        <Navbar backgroundTransparent={true} showTitle={true} />

        {/* Background Image with Overlay */}
        <div className="relative pb-56 w-full text-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${asset_7})` }}
          >
            <div className="absolute inset-0 bg-[#00000033] opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl md:text-7xl text-white font-extrabold mt-36 font-custom">
              Our Hotel
            </h1>
            <p className="mt-4 text-2xl md:text-4xl font-light text-white">
              A free template by Colorlib. Download and share!
            </p>
          </div>
        </div>

        {/* Render Experience without header */}
        <Experience hideHeader={true} />
        <RoomType
          heading="Family Room"
          paragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <Tour
          heading="Hotel Gallery"
          showBackground ={false}
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed."
        />
        <div data-aos="fade-up"> {/* Add AOS to Recent Blog */}
        <RecentBlog
          heading="More Hotel Features"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed."
          showDescription={false}
          showDate={false}
          showBackground = {false}
        />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Hotels;
