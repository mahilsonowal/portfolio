import React from 'react';

const About = ({ onClose }) => {
  return (
    <section className="bg-black text-white py-8 md:py-16 relative min-h-screen overflow-y-auto">
      {/* Mobile Close Button */}
      <button
        onClick={onClose}
        className="md:hidden fixed top-4 right-4 text-white hover:text-gray-300 z-50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1a1a1a] transition-all duration-300"
      >
        <span className="text-xl">✕</span>
      </button>

      {/* Desktop Close Button */}
      <button
        onClick={onClose}
        className="hidden md:flex fixed top-8 right-8 text-white hover:text-gray-300 z-50 w-12 h-12 items-center justify-center rounded-full hover:bg-[#1a1a1a] transition-all duration-300"
      >
        <span className="text-2xl">✕</span>
      </button>

      <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="mt-70 md:mt-40 text-3xl md:text-6xl font-extrabold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#c2c2c2] to-white leading-[1.2]">
            Hey there! 👋
          </h2>
          


          <div className="space-y-4 md:space-y-6 text-base md:text-xl">
            <p className="text-[#a0a0a0]">
              I'm <span className="text-white font-semibold">Mahil</span>, and I'm absolutely in love with crafting digital experiences that leave people saying "wow"! 🚀
            </p>

            <p className="text-[#a0a0a0]">
              Since diving into web development in 2021, I've built <span className="text-white">50+ websites</span> and collaborated with clients worldwide. My commitment to clean code and pixel-perfect designs has earned me recognition as a <span className="text-white">top-rated developer</span> on various platforms.
            </p>

            <p className="text-[#a0a0a0]">
              Chasing my dream of creating next-level web experiences, I specialize in <span className="text-white">full-stack development</span>, turning complex ideas into user-friendly applications. From sleek frontends to robust backends, I make sure every project is a certified banger! ✨
            </p>

            <p className="text-[#a0a0a0]">
              When I'm not coding, you'll find me sharing my knowledge through <span className="text-white">tech tutorials</span> and building a community of aspiring developers. I believe in keeping it real and helping others level up their coding game. 💯
            </p>

            <p className="text-[#a0a0a0]">
              Got a project in mind? Let's connect and create something epic together! Whether it's a personal website or a full-scale web app, I'm here to turn your vision into reality. No cap! 🔥
            </p>
          </div>

          <div className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4">
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #WebDevelopment
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #FullStack
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #ReactJS
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #NodeJS
            </div>
            <div className="bg-[#1a1a1a] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm text-[#808080]">
              #CleanCode
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
