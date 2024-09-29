import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransactSvg from '../assets/logo_transact_sinfondo.png';
import TransactSvgBlack from '../assets/logo_transact_sinfondo_black.png';

import ButtonNav from './ButtonNavBar.jsx'; // Ajusta la ruta según la ubicación de tu componente

export const NavBar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detecta el desplazamiento para cambiar el estado de "scrolled"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex justify-between w-full p-4 items-center fixed z-10 transition-all duration-500 ease-in-out 
 ${isScrolled ? 'bg-transparent backdrop-blur-sm' : 'bg-transparent backdrop-blur-sm text-white'}`}>
      <div className="flex items-center relative w-12 h-12">
        <img
          src={TransactSvg}
          alt="Logo"
          className={`absolute w-full h-full transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={TransactSvgBlack}
          alt="Logo Black"
          className={`absolute w-full h-full transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-0 right-0 h-screen w-64 max-[425px]:w-full bg-black opacity-80 text-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col items-center space-y-4 p-4 mt-16">
          <ButtonNav text="Features" onClick={() => scrollToSection('features')} />
          <ButtonNav text="About" onClick={() => scrollToSection('about')} />
          <ButtonNav text="Contact" onClick={() => scrollToSection('contact')} />
          <Link to="/signup">
            <span className="font-semibold p-3 bg-white rounded-full text-black w-36 text-lg hover:bg-black hover:text-white hover:transition-all hover:border-white inline-block text-center">
              Sign up
            </span>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex items-center w-full">
        <div className="flex-grow flex items-center justify-center space-x-14 text-lg font-semibold">
          <ButtonNav text="Features" onClick={() => scrollToSection('features')} />
          <ButtonNav text="About" onClick={() => scrollToSection('about')} />
          <ButtonNav text="Contact" onClick={() => scrollToSection('contact')} />
        </div>
        <div className="flex-shrink-0 mr-2">
          <Link to="/signup">
            <button className="font-semibold p-3 bg-white rounded-full text-black w-36 text-lg">Sign up</button>
          </Link>
        </div>
      </div>

      <div className="lg:hidden flex items-center ml-2">
        <button
          className={`p-2 relative transition-colors duration-300 ease-in-out ${isMenuOpen ? 'text-white' : (isScrolled ? 'text-black' : 'text-white')}`}
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-1000 ease-in-out ${isMenuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </>
            ) : (
              <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </>
            )}
          </svg>
        </button>
      </div>

    </nav>
  );
};

export default NavBar;
