import React,{useEffect} from "react";
import styles from './RecentBlog.module.css'
import asset_0 from "../assets/asset_0.jpeg";
import asset_7 from "../assets/asset_7.jpeg";
import asset_8 from "../assets/asset_8.jpeg";

import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles


function RecentBlog({ heading, paragraph, showDescription = true ,showDate = true, showBackground=true}) {

    // Initialize AOS when the component mounts
    useEffect(() => {
      AOS.init({
        duration: 1000,  // Global animation duration
        once: true,      // Whether animation should happen only once
      });
    }, []);

  return (
    <div className='mb-[-50px]'>
      {showBackground && (
      <div className={`${styles.bgClipPath} absolute inset-0`}></div>
    )}
      <div className="relative w-full py-20 bg-gray-100">
        <div className="tilted-background"></div>
        <div className="relative z-10 w-4/5 lg:w-4/5 mx-auto">
          <h2 className="text-6xl font-semibold mb-6 text-center font-custom">
            {heading}
          </h2>
          <p className="text-lg font-normal  text-center w-full mx-auto ">
            {paragraph}
          </p>
          <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5"  >
            {/* Card 1 */}
            <div className="bg-white shadow-md overflow-hidden" data-aos="zoom-in">
              <img
                className="w-full h-48 object-cover"
                src={asset_0}
                alt="Post 1"
              />
              <div className="p-4">
              {showDate && (
                <p className="text-sm text-gray-500">September 20, 2024</p>)}
                <h3 className="text-xl font-semibold text-gray-800 mt-2 font-custom">
                  45 Best Places To Unwind
                </h3>
                {showDescription && (
                  <p className="text-gray-600 mt-2 leading-8">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                  </p>
                )}
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md overflow-hidden" data-aos="zoom-in">
              <img
                className="w-full h-48 object-cover"
                src={asset_7}
                alt="Post 2"
              />
              <div className="p-4">
              {showDate && (
                <p className="text-sm text-gray-500">September 20, 2024</p>)}
                <h3 className="text-xl font-semibold text-gray-800 mt-2 font-custom">
                  45 Best Places To Unwind
                </h3>
                {showDescription && (
                  <p className="text-gray-600 mt-2 leading-8">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                  </p>
                )}
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md overflow-hidden" data-aos="zoom-in">
              <img
                className="w-full h-48 object-cover"
                src={asset_8}
                alt="Post 3"
              />
              <div className="p-4">
              {showDate && (
                <p className="text-sm text-gray-500">September 20, 2024</p>)}
                <h3 className="text-xl font-semibold text-gray-800 mt-2 font-custom">
                  45 Best Places To Unwind
                </h3>
                {showDescription && (
                  <p className="text-gray-600 mt-2 leading-8">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentBlog;
