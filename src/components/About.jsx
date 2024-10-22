import React from "react";
import Navbar from "./Navbar"; // Reuse the Navbar component
import RoomType from "./RoomType";
import Tour from "./Tour";
import Team from "./Team";
import Footer from "./Footer";
import asset_0 from "../assets/asset_0.jpeg";

function About() {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        {/* Navbar */}
        <Navbar backgroundTransparent={true} showTitle={true} />

        {/* Hero Section with Background Image */}
        <div className="relative pb-56 w-full text-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${asset_0})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00000033] opacity-50"></div>
          </div>

          {/* Title on top of overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl md:text-7xl text-white font-extrabold mt-36 font-custom">
              About
            </h1>
            <p className="mt-4 text-2xl md:text-4xl font-light text-white">
              A free template by Colorlib. Download and share!
            </p>
          </div>
        </div>

        {/* Content Wrapper with 80% Width */}
        <div className=" mx-auto">
          {/* Content Sections */}
          <RoomType
            heading="Welcome Travel & Tours"
            paragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            showRoom2={false} // Customize based on the About page
            
          />
          <Tour
            heading="Hotel Gallery"
            showBackground = {false}
            paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed."
          />
          <Team />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default About;
