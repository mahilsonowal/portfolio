import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black relative text-white py-8 border-t border-[#333333] ">
      <div className="container relative mx-auto px-4 md:px-6 z-10 ">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ">
          <div className="text-center md:text-left">


            <p className="text-[#808080] text-sm">
              © {currentYear} Mahil. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/mahilsonowal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/mahil-sonowal-883751246/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:mahilsonowal@gmail.com" 
              className="text-white hover:text-white transition-colors duration-300"
            >
              Email

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
