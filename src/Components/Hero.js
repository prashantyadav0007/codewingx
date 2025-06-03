import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
      >
        We Craft Digital Solutions
      </motion.h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6">
        CodeWingx is a creative tech agency helping brands evolve with impactful design and development.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
