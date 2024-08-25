// components/Navbar.tsx

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[10vh] flex justify-between items-center p-6 bg-white">
      <div className="text-2xl font-bold text-black">
        <a href="#">Travel</a>
      </div>

      <ul className="hidden md:flex text-xl  space-x-8 text-black">
        <li>
          <a href="#" className="hover:text-orange-500">
            Destinations
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-500">
            Hotels
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-500">
            Flights
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-500">
            Bookings
          </a>
        </li>
      </ul>

      {/* Right Side Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-black hover:text-orange-500">Login</button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button className="text-black hover:text-orange-500">
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
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
