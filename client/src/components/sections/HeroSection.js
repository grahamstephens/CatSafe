import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className='flex items-center hero-section bg-gradient-to-b from-blue-500 to-blue-800 text-white h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='w-full md:w-1/2 mb-8 md:mb-0'
        >
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Connect with your peers anonymously
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-slate-200'>
            CatSafe is a secure and judgement-free platform designed exclusively
            for University of Kentucky students to share and discuss mental
            health concerns with fellow wildcats.
          </p>
          <Link
            to='/signup'
            className='bg-yellowOrange text-white hover:text-white font-medium py-3 px-8 rounded-md'
          >
            Start sharing
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='w-full md:w-1/2'
        >
          <Player
            src='https://assets8.lottiefiles.com/packages/lf20_R0hOA4mzhg.json'
            className='mx-auto w-full z-0'
            loop
            autoplay
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
