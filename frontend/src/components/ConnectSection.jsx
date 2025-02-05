import React, { useState } from 'react';
import Contact from './Contacts';

const ConnectSection = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Animation variants for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <>
      <section className="bg-black text-white py-16 md:py-32 relative min-h-[80vh] flex items-center">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-6 relative z-10">
          <div className="w-full md:w-1/2 text-center mb-8 md:mb-0 mt-16 md:mt-15">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#c2c2c2] to-white leading-[1.2] py-4">
              Let's Connect! 🤝
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-4 text-[#a0a0a0]">
              Ready to <span className="text-white">collaborate</span> on your next project?
            </p>
            <p className="text-2xl md:text-3xl font-bold mb-4 text-[#a0a0a0]">
              Let's make something <span className="text-white">amazing</span> happen!
            </p>
            <p className="text-lg md:text-xl text-[#808080] mb-8">
              Whether you have a project in mind or just want to chat, I'm all ears! ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 justify-center">
              <button
                onClick={() => setShowContactModal(true)}
                className="shine-button bg-[#1a1a1a] hover:bg-[#2a2a2a] px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border border-[#333333] w-full sm:w-auto overflow-hidden relative"
              >
                Send Message
              </button>
              <button className="border border-[#333333] hover:bg-[#1a1a1a] px-8 py-3 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto">
                View Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-2xl mx-4">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              ✕
            </button>
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectSection;