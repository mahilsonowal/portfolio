import React from 'react';
import { motion } from 'framer-motion';

const Slogan = () => {
  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Animation variants for the paragraph
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' } },
    hover: { color: '#3B82F6', transition: { duration: 0.3 } }, // Change color on hover
  };

  return (
    <div className="text-center py-16 bg-black text-white">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl w-2/3 mx-auto md:text-5xl font-bold mb-4"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Innovative Web Developer Driving Excellence and Professionalism
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="w-2/3 mx-auto text-lg md:text-xl text-gray-300 mb-8"
        variants={paragraphVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Crafting modern, responsive, and user-friendly web applications that deliver exceptional experiences. 
        With a passion for clean code and innovative solutions, I bring ideas to life and help businesses thrive in the digital world.
      </motion.p>
    </div>
  );
};

export default Slogan;