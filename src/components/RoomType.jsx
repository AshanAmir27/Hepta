import React from "react";
import asset_10 from "../assets/asset_10.jpeg";
import asset_11 from "../assets/asset_11.jpeg";

function RoomType({ heading, paragraph, showRoom2 = true }) {
  return (
    <div className="mt-5 mb-5 w-full max-w-6xl m-auto p-5">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[570px]">
          <img
            src={asset_10}
            alt="Family Room"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2  md:p-12 mt-5 md:mt-0 ">
          <h1 className="font-bold text-2xl md:text-3xl font-custom">{heading}</h1>
          <p className="pt-2 text-base md:text-lg font-light leading-7 md:leading-8">
            {paragraph}
          </p>
          <p className="pt-2 text-base md:text-lg font-light leading-7 md:leading-8">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          {/* Styled Link */}
          <a
            href="/"
            className="inline-block border border-cyan-600 hover:bg-cyan-500 hover:text-white px-4 py-2 mt-4 rounded transition-all duration-300 ease-in-out hover:no-underline text-base md:text-lg"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      {showRoom2 && (
        <div className="flex flex-col md:flex-row-reverse md:mt-20 mt-5">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[570px]">
            <img
              src={asset_11}
              alt="Presidential Room"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2  md:p-12 mt-5 md:mt-0">
            <h1 className="font-bold text-2xl md:text-3xl font-custom">Presidential Room</h1>
            <p className="pt-2 text-base md:text-lg font-light leading-7 md:leading-8">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they
              live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean.
            </p>
            <p className="pt-2 text-base md:text-lg font-light leading-7 md:leading-8">
              A small river named Duden flows by their place and supplies it with
              the necessary regelialia.
            </p>

            {/* Styled Link */}
            <a
              href="/"
              className="inline-block border border-cyan-600 hover:bg-cyan-500 hover:text-white px-4 py-2 mt-4 rounded transition-all duration-300 ease-in-out no-underline text-base md:text-lg"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomType;
