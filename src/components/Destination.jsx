import React from 'react';
import asset_8 from '../assets/asset_8.jpeg';
import asset_9 from '../assets/asset_9.jpeg';
import asset_15 from '../assets/asset_15.jpeg';
import asset_20 from '../assets/asset_20.jpeg';

function Destination() {
  return (
    <div className="bg-gray-100 py-10 text-center mb-10 w-[80%] sm:w-[80%] lg:max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 font-custom">Top Destinations</h1>
      <p className="mb-8 text-lg text-gray-700 w-[80%] m-auto pb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
      </p>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1 */}
        <div className="overflow-hidden ">
          <img
            className="w-full h-48 object-cover"
            src={asset_8}
            alt="Destination 1"
          />
          <div className="pt-2">
            <div className="flex justify-between items-start">
              {/* Title and Rating */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 font-custom">Sydney, Australia</h3>
                <div className="flex items-center mt-2 justify-between w-full">
                  <span className="text-[#65c0ba]">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </span>
                  {/* Review Numbers */}
                  <p className="text-sm text-gray-300 ml-2 italic">3,239 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden ">
          <img
            className="w-full h-48 object-cover"
            src={asset_9}
            alt="Destination 2"
          />
          <div className="pt-2">
            <div className="flex justify-between items-start">
              {/* Title and Rating */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 font-custom">Sydney, Australia</h3>
                <div className="flex items-center mt-2 justify-between w-full">
                  <span className="text-[#65c0ba]">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </span>
                  {/* Review Numbers */}
                  <p className="text-sm text-gray-300 ml-2  italic">4,921 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={asset_15}
            alt="Destination 3"
          />
          <div className="pt-2">
            <div className="flex justify-between items-start">
              {/* Title and Rating */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 font-custom">Sydney, Australia</h3>
                <div className="flex items-center mt-2 justify-between w-full">
                  <span className="text-[#65c0ba]">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </span>
                  {/* Review Numbers */}
                  <p className="text-sm text-gray-300 ml-2  italic">2,112 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={asset_20}
            alt="Destination 4"
          />
          <div className="pt-2">
            <div className="flex justify-between items-start">
              {/* Title and Rating */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 font-custom">Sydney, Australia</h3>
                <div className="flex items-center mt-2 justify-between w-full">
                  <span className="text-[#65c0ba]">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </span>
                  {/* Review Numbers */}
                  <p className="text-sm text-gray-300 ml-2  italic">6,421 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Destination;
