import React,{useEffect} from "react";
import asset_1 from '../assets/asset_1.svg';
import asset_2 from '../assets/asset_2.svg';
import asset_3 from '../assets/asset_3.svg';
import asset_4 from '../assets/asset_4.svg';
import asset_5 from '../assets/asset_5.svg';
import asset_6 from '../assets/asset_6.svg';


import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Experience({ hideHeader }) {

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Global animation duration
      once: true,      // Whether animation should happen only once
    });
  }, []);    


  return (
    <div className="py-16 px-4 bg-gray-100 mt-8">
      {!hideHeader &&(
      <hr className="my-8"  />
    )}
      <div className="mx-auto w-4/5">
        {!hideHeader && (
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 font-custom">
              Experience Once In Your Life Time
            </h1>
            <p className="mt-4 w-full text-lg text-gray-600 ">
              Far far away, behind the word mountains, far from the countries Vokalia
              and Consonantia, there live the blind texts. Separated they live in
              Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className=" p-6" data-aos="fade-up">
            <img src={asset_1} alt="Good Foods" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-2xl text-center font-semibold text-gray-800 font-custom">Good Foods</h1>
            <p className="mt-2 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Card 2 */}
          <div className=" p-6 " data-aos="fade-up">
            <img src={asset_2} alt="Travel Anywhere" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-2xl font-semibold text-gray-800 text-center font-custom">Travel Anywhere</h1>
            <p className="mt-2 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Card 3 */}
          <div className=" p-6 " data-aos="fade-up">
            <img src={asset_3} alt="Airplane" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-2xl font-semibold text-gray-800 text-center font-custom">Airplane</h1>
            <p className="mt-2 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Card 4 */}
          <div className=" p-6 " data-aos="fade-up">
            <img src={asset_4} alt="Beach Resort" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-2xl font-semibold text-gray-800 text-center font-custom">Beach Resort</h1>
            <p className="mt-2 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Card 5 */}
          <div className=" p-6" data-aos="fade-up">
            <img src={asset_5} alt="Mountain Climbing" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-2xl font-semibold text-center text-gray-800 font-custom">Mountain Climbing</h1>
            <p className="mt-2 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Card 6 */}
          <div className=" p-6 " data-aos="fade-up">
            <img src={asset_6} alt="Hot Air Balloon" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-2xl font-semibold text-center text-gray-800 font-custom">Hot Air Balloon</h1>
            <p className="mt-2 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
