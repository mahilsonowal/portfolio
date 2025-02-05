import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import About from './About';
import Contact from './Contacts';



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-[#1a1a1a]' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#c2c2c2] to-white">
              Portfolio
            </h1>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-8">
              <li>
                <button 
                  onClick={() => setShowAboutModal(true)}
                  className="text-[#a0a0a0] hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  About
                </button>
              </li>
              <li>
                <Link 
                  to="projects-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-[#a0a0a0] hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="px-4 py-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-full text-white text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
                >
                  Let's Talk
                </button>
              </li>
            </ul>

            {/* Mobile menu */}
            <div className={`absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-md md:hidden transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              <ul className="flex flex-col items-center py-4 space-y-4">
                <li>
                  <button 
                    onClick={() => {
                      setShowAboutModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="text-[#a0a0a0] hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
                  >
                    About
                  </button>
                </li>
                <li>
                  <Link 
                    to="projects-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#a0a0a0] hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider cursor-pointer"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setShowContactModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-full text-white text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
                  >
                    Let's Talk
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* About Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-y-auto">
          <div className="relative w-full max-w-4xl mx-4 my-8">
            <About onClose={() => setShowAboutModal(false)} />
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-y-auto">
          <div className="relative w-full max-w-4xl mx-4 my-8">
          <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4  text-white hover:text-gray-300 z-50 h-10 w-10"
            >
              ✕
            </button>
            <Contact onClose={() => setShowContactModal(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;