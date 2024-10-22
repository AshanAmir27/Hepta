import React from "react";
import asset_12 from "../assets/asset_12.jpeg";
import Customer from "./Customer";
import Footer from "./Footer";
import Navbar from "./Navbar"; // Import the Navbar component

function Contact() {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        {/* Use the Navbar component */}
        <Navbar />

        {/* Background Image with Overlay */}
        <div className="relative pb-56 w-full text-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${asset_12})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00000033] opacity-50"></div>
          </div>

          {/* Content on top of overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl md:text-7xl text-white font-extrabold mt-36 font-custom">
              Contact
            </h1>
            <p className="mt-4 text-2xl md:text-4xl font-light text-white">
              A free template by Colorlib. Download and share!
            </p>
          </div>
        </div>

        {/* Responsive Contact Section */}
        <section className="p-8 md:p-16 max-w-6xl mx-auto h-auto">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8">
            {/* Contact Form */}
            <div className="bg-white p-10 shadow-2xl flex-1">
              <form>
                {/* Name and Phone in a single row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#65c0ba] w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#65c0ba] w-full"
                    />
                  </div>
                </div>

                {/* Email on a new row consuming full width */}
                <div className="flex flex-col mt-4">
                  <label htmlFor="email" className="mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#65c0ba] w-full"
                  />
                </div>

                {/* Message textarea on a new row consuming full width */}
                <div className="flex flex-col mt-4">
                  <label htmlFor="message" className="mb-1">Write Message</label>
                  <textarea
                    id="message"
                    placeholder="Write your message"
                    required
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#65c0ba] w-full"
                    rows="4"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 border border-[#55b3a1] hover:text-white pl-3 pr-3 pt-2 pb-2 rounded-md hover:bg-[#55b3a1] transition duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="p-6 flex-1">
              <p className="text-lg text-gray-700">
                <span className="text-[#65c0ba] text-sm font-semibold font-custom">ADDRESS:</span><br />
                <span className="text-2xl font-bold">98 West 21th Street, Suite 721<br /> New York NY 10016</span>
              </p>
              <p className="text-lg text-gray-700 mt-4">
                <span className="text-[#65c0ba] text-sm font-semibold font-custom">PHONE:</span><br />
                <span className="text-2xl font-bold">(+1) 435 3533</span>
              </p>
              <p className="text-lg text-gray-700 mt-4">
                <span className="text-[#65c0ba] text-sm font-semibold font-customf">EMAIL:</span><br />
                <a href="mailto:info@yourdomain.com" className="text-2xl font-bold">
                  info@yourdomain.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <Customer />
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
