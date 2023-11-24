import React, { useState } from "react";
import { Link } from "react-router-dom";

import lottery from "../assets/lottery.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold">
          <img
            src={lottery}
            alt="lotto"
            style={{
              width: "40px",
              height: "40px",
              marginRight: "10px",
            }}
          />
          Lottokeeper
        </Link>

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
          <Link
            to="/"
            className="tbg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            About the game
          </Link>
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
