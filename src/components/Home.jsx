import React, { useRef, useEffect, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import { MdOutlineArrowDropDown } from "react-icons/md";
import asset_10 from "../assets/asset_10.jpeg";
import Footer from "./Footer";

const Welcome = lazy(() => import("./Welcome"));
const Experience = lazy(() => import("./Experience"));
const Tour = lazy(() => import("./Tour"));
const Customer = lazy(() => import("./Customer"));
const Destination = lazy(() => import("./Destination"));
const RecentBlog = lazy(() => import("./RecentBlog"));

function Home() {
  const welcomeRef = useRef(null);

  const handleScrollDown = () => {
    welcomeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Global animation duration
      once: true,      // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative">
        {/* Navbar */}
        <Navbar backgroundTransparent={true} showTitle={true} />

        {/* Background Image with Overlay */}
        <div className="relative h-screen w-full text-center">
          <img
            src={asset_10}
            className="hidden"
            alt="Preload-image"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${asset_10})` }}
          >
            <div className="absolute inset-0 bg-[#00000033] opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full" >
            <h1 className="text-5xl md:text-8xl text-white font-extrabold mt-40 font-custom">
              Travel & Tours
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-light text-white">
              A free template by Colorlib. Download and share!
            </p>
            <button className="w-3/4 ml-4 mr-4 mt-12 px-6 py-3 md:px-10 md:py-3 md:w-[250px] text-white border border-white rounded-sm transition-all duration-300 ease-in-out hover:bg-white hover:!text-black hover:border-gray-600">
              VISIT COLORLIB
            </button>

            <div
              className="pt-10 md:mt-40 cursor-pointer"
              onClick={handleScrollDown}
            >
              <MdOutlineArrowDropDown className="text-4xl text-white animate-bounce mx-auto" />
              <button className="mt-2 text-white text-sm">SCROLL DOWN</button>
            </div>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <div data-aos="fade-up"> {/* Add AOS to Welcome component */}
            <Welcome ref={welcomeRef} />
          </div>
          <div data-aos="fade-up"> {/* Add AOS to Experience component */}
            <Experience />
          </div>
          <div data-aos="fade-up"> {/* Add AOS to Tour component */}
            <Tour
              heading="International Tour Management."
              paragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            />
          </div>
          <div data-aos="fade-up"> {/* Add AOS to Recent Blog */}
            <RecentBlog
              heading="Recent Blog Posts"
              paragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
            />
          </div>
          <div data-aos="fade-up"> {/* Add AOS to Customer component */}
            <Customer />
          </div>
          <div data-aos="fade-up"> {/* Add AOS to Destination component */}
            <Destination />
          </div>
        </Suspense>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
