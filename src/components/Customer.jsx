import React,{useEffect}from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles


function Customer() {
  
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Global animation duration
      once: true,      // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gray-100 py-10 text-center mb-10 mt-16 w-4/5 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 font-custom mt-[5%]">Happy Customers</h1>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-20">
        {/* Testimonial 1 */}
        <div className="p-6" data-aos="fade-up">
          <div className="mb-4">
            <img
              className="w-16 h-16 rounded-full"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Customer 1"
            />
          </div>

          <p className="text-gray-600 mt-2 text-left italic leading-7 text-lg font-normal">
            “Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean."
          </p>

          <h6 className="text-xl font-light flex flex-start italic mt-4">
            —David Williams
          </h6>
        </div>

        {/* Testimonial 2 */}
        <div className="p-6 text-center" data-aos="fade-up">
          <div className="mb-4">
            <img
              className="w-16 h-16 rounded-full"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Customer 2"
            />
          </div>

          <p className="text-gray-600 mt-2 text-left italic leading-7 text-lg font-normal">
            "Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean."
          </p>

          <h6 className="text-xl font-light flex flex-start italic mt-4">
            —David Williams
          </h6>
        </div>

        {/* Testimonial 3 */}
        <div className="p-6 text-center" data-aos="fade-up">
          <div className="mb-4">
            <img
              className="w-16 h-16 rounded-full"
              src="https://randomuser.me/api/portraits/men/85.jpg"
              alt="Customer 3"
            />
          </div>
          <p className="text-gray-600 mt-2 text-left italic leading-7 text-lg font-normal">
            "Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean."
          </p>
          <h6 className="text-xl font-light flex flex-start italic mt-4">
            —David Williams
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Customer;
