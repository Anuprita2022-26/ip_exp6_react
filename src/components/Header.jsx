import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({scrollToSection}) => {
  return (
    <header className="bg-yellow-500 py-6">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">

          {/* Navigation Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><Link onClick={() => scrollToSection('hero')} to="/" className="text-white hover:text-yellow-300">Home</Link></li>
            <li><Link onClick={() => scrollToSection('about')} className="text-white hover:text-yellow-300">About</Link></li>
            <li><Link to="/projects" className="text-white hover:text-yellow-300">Projects</Link></li>
            <li><Link onClick={() => scrollToSection('contact')} className="text-white hover:text-yellow-300">Contact</Link></li>
          </ul>

          <div className="m-2 text-center text-white">
          <h1 className="text-3xl font-bold m-2">Anuprita</h1>
        </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>

        
      </div>
    </header>
  );
};

export default Header;
