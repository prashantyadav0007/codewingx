import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-blue-600">CodeWingx</div>
        <ul className="flex space-x-8 font-medium text-gray-700">
          <li>
            <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="services" smooth duration={500} className="cursor-pointer hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-600">
              Projects
            </Link>
          </li>
          <li>
            <Link to="footer" smooth duration={500} className="cursor-pointer hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
