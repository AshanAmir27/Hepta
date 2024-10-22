// HeaderWithBackground.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Header = ({ title, backgroundImage, children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleHamburger = () => {
    setShowNavbar(!showNavbar);
    document.body.style.overflow = showNavbar ? "auto" : "hidden";
  };

  return (
    <div className="relative">
      {/* Header */}
      <div
        className={`flex justify-between items-center p-4 z-30 absolute top-0 left-0 w-full ${
          showNavbar ? "bg-white" : "bg-transparent"
        } transition-all duration-300`}
      >
        {/* Navbar Title */}
        {!showNavbar && (
          <li className="text-2xl font-bold list-none sm:text-xl md:text-3xl text-white">
            Hepta
          </li>
        )}

        {/* Hamburger / Cross button */}
        <div className="relative z-30 ml-auto">
          {showNavbar ? (
            <RxCross2
              onClick={handleHamburger}
              className="text-3xl sm:text-2xl md:text-4xl cursor-pointer text-black"
            />
          ) : (
            <RxHamburgerMenu
              onClick={handleHamburger}
              className="text-3xl sm:text-2xl md:text-4xl cursor-pointer text-white"
            />
          )}
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`${
          showNavbar ? "flex" : "hidden"
        } flex-col items-center justify-center fixed top-0 left-0 w-full h-full bg-white z-20 space-y-3 p-4 transition-all duration-300 ease-in-out`}
      >
        {["Home", "Hotels", "AboutUs", "Gallery", "News", "Contact"].map(
          (item) => (
            <NavLink
              key={item}
              to={`/${item.replace(" ", "")}`}
              className="text-4xl sm:text-2xl md:text-3xl text-gray-800 hover:text-[#65c0ba] hover:no-underline"
              onClick={() => setShowNavbar(false)}
            >
              {item}
            </NavLink>
          )
        )}
      </nav>

      {/* Background Image with Overlay */}
      <div className="relative pb-56 w-full text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content on top of overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl md:text-7xl text-white font-extrabold mt-36">
            {title}
          </h1>
          <p className="mt-4 text-2xl md:text-4xl font-light text-white">
            A free template by Colorlib. Download and share!
          </p>
        </div>
      </div>

      {/* Render children components */}
      {children}
    </div>
  );
};

export default Header;
