import React, { useState } from 'react';
import Contact from './Contacts';
import { Link } from 'react-scroll';

const Hero = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <section className="bg-black text-white py-16 md:py-32 relative min-h-[80vh] flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 relative z-11">       
        <div className="w-full md:w-1/2 text-left mb-8 md:mb-0 mt-16 md:mt-15">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#c2c2c2] to-white leading-[1.2] py-4">
            Hey there! <span className="wave-emoji">👋🏻</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-4 text-[#a0a0a0]">
            I'm <span className="text-white">Mahil</span>
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-4 text-[#a0a0a0]">
            Let's create something <span className="text-white">epic</span> together!
          </p>
          <p className="text-lg md:text-xl text-[#808080] mb-8">
            Full-stack dev who's all about that pixel-perfect life ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
            <button 
              onClick={() => setShowContactModal(true)}
              className="shine-button bg-[#1a1a1a] hover:bg-[#2a2a2a] px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-[#333333] w-full sm:w-auto overflow-hidden relative"
            >
              Let's Connect
            </button>
            <Link
              to="projects-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="border border-[#333333] hover:bg-[#1a1a1a] px-8 py-3 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto text-center cursor-pointer"
            >
              Check My Work
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-2xl mx-4">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4  text-white hover:text-gray-300 z-50 h-10 w-10"
            >
              ✕
            </button>

            <Contact />
          </div>
        </div>
      )}

      <style jsx>{`
        .shine-button {
          position: relative;
          overflow: hidden;
        }

        .shine-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 100%
          );
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .wave-emoji {
          display: inline-block;
          color: #000000;
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;