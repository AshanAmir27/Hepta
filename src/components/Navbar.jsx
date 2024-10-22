import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = ({ backgroundTransparent = true, showTitle = true }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleHamburger = () => {
    setShowNavbar((prev) => !prev);
  };

  // Handle page scroll lock for open navbar
  useEffect(() => {
    document.body.style.overflow = showNavbar ? "hidden" : "auto";
  }, [showNavbar]);

  return (
    <>
      {/* Header */}
      <div
        className={`flex justify-between items-center mt-[30px] p-4 z-30 absolute top-0 left-0 w-full ${
          backgroundTransparent && !showNavbar ? "bg-transparent" : "bg-white"
        } transition-all duration-300`}
      >
        {/* Navbar Title */}
        {showTitle && !showNavbar && (
          <li className=" text-4xl font-bold font-custom list-none sm:text-xl md:text-3xl text-white">
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

      {/* Navbar Menu */}
      <nav
        className={`${
          showNavbar ? "flex" : "hidden"
        } flex-col items-center justify-center fixed top-0 left-0 w-full h-full bg-white z-20 space-y-3 p-4 transition-all duration-300 ease-in-out`}
      >
        {["Home", "Hotels", "About", "Gallery", "News", "Contact"].map(
          (item) => (
            <NavLink
              key={item}
              to={`/${item.replace(" ", "")}`}
              className="text-4xl font-custom font-bold sm:text-2xl md:text-3xl text-gray-800 hover:text-[#65c0ba] hover:no-underline"
              onClick={handleHamburger}
            >
              {item}
            </NavLink>
          )
        )}
      </nav>
    </>
  );
};

export default Navbar;
