import React from "react";
import styles from './Tour.module.css';
import asset_0 from "../assets/asset_0.jpeg";
import asset_7 from "../assets/asset_7.jpeg";
import asset_8 from "../assets/asset_8.jpeg";

function Tour({ heading, paragraph,showBackground = true }) {
  return (
    <div className="relative w-full px-4 py-10 bg-gray-100">
      {/* Background with Clip Path */}
      {showBackground && (
      <div className={`${styles.bgClipPath} absolute inset-0`}></div>
    )}
      {/* Content Wrapper (z-index ensures it's above the background) */}
      <div className="relative z-10">
        {/* Tour Content */}
        <div className="text-center mb-10 lg:w-3/4 xl:w-1/2 mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-custom">
            {heading}
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        </div>

        {/* Carousel Section */}
        <div className="w-4/5 lg:w-4/5 mx-auto shadow-lg rounded-lg mb-10">
          <div id="carouselExampleControls" className="carousel slide relative">
            <div className="carousel-inner relative w-full overflow-hidden">
              {/* First Slide */}
              <div className="carousel-item active relative float-left w-full">
                <img
                  className="block w-full h-[24rem] lg:h-[40rem] object-cover"
                  src={asset_0}
                  alt="First slide"
                />
              </div>
              {/* Second Slide */}
              <div className="carousel-item relative float-left w-full">
                <img
                  className="block w-full h-[24rem] lg:h-[40rem] object-cover"
                  src={asset_7}
                  alt="Second slide"
                />
              </div>
              {/* Third Slide */}
              <div className="carousel-item relative float-left w-full">
                <img
                  className="block w-full h-[24rem] lg:h-[40rem] object-cover"
                  src={asset_8}
                  alt="Third slide"
                />
              </div>
            </div>

            {/* Previous Button */}
            <a
              className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>

            {/* Next Button */}
            <a
              className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour;
