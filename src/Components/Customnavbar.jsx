import React, { useState } from "react";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-white">
          <img className="h-12 w-20 cursor-pointer" src="./devx-logo.webp" alt="..." />
        </div>
        <div className="hidden md:flex">
          <a href="#home" className="text-white px-4 py-2">HOME</a>
          <a href="#services" className="text-white px-4 py-2">SERVICES</a>
        </div>
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4.293 15.707a1 1 0 011.414-1.414L10 13.414l4.293 4.293a1 1 0 001.414-1.414l-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 000 1.414z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#home" className="block text-white px-4 py-2">HOME</a>
          <a href="#services" className="block text-white px-4 py-2">SERVICES</a>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
