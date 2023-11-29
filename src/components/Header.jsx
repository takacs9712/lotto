import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AboutButton } from "./Buttons/AboutButton";
import { HomeButton } from "./Buttons/HomeButton";
import { HomeIcon } from "./Buttons/HomeIcon";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <HomeIcon />
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <HomeButton />
          <AboutButton />
        </nav>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-gray-800 p-4 rounded shadow">
            <Link
              to="/"
              className="block text-lg text-white mb-2 hover:text-gray-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-lg text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              About the game
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
