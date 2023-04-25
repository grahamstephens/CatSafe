import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className='cta-section py-20 bg-gradient-to-b from-blue-500 to-blue-800 text-white'>
      <div className='container mx-auto text-center w-4/5'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-4xl font-bold mb-4 text-white capitalize'
        >
          Are you <span className='text-yellowOrange'>ready</span> to start
          <span className='text-yellowOrange'> talking</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='text-lg mb-8 px-16'
        >
          With CatSafe, you don't have to struggle with mental health issues
          alone. Join our community today and start connecting with people who
          understand what you're going through.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <Link
            to='/signup'
            className='bg-white text-blue-500 px-8 py-3 rounded-full font-bold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out'
          >
            Sign up now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
