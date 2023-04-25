import React from 'react';
import { motion } from 'framer-motion';
import roleSelectionImage from '../../assets/images/roleSelection.png';
import matchedImage from '../../assets/images/matched.png';
import chatImage from '../../assets/images/chat.png';
import careImage from '../../assets/images/care.png';
import mentalHealthImage from '../../assets/images/mentalHealth.png';

const ServicesSection = () => {
  return (
    <section className='services-section py-12 bg-[#EDF2F7] h-screen'>
      <div className='flex gap-x-16 justify-center items-center container mx-auto '>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className='text-center mb-16 h-full'
        >
          <h2 className='font-bold mb-4 border-b-4 border-yellowOrange'>
            How <span>CatSafe</span> Works
          </h2>
          <img src={mentalHealthImage} alt='Mental health' />
          <p className='text-gray-600 leading-6'>
            Mental health is an important aspect of student life, but it can be
            tough to find someone to talk to. That's why we created CatSafe - a
            safe and supportive space where University of Kentucky students can
            connect anonymously and talk about anything that's on their mind.
            Here's how it works:
          </p>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className='flex flex-col items-center p-4 bg-white rounded-lg shadow-xl'
          >
            <div className='flex w-16 h-16 p-2 mb-2 border border-yellowOrange'>
              <img
                src={roleSelectionImage}
                alt='Illustration of a queue of people'
              />
            </div>
            <h3 className='text-2xl font-bold mb-4'>Choose your role</h3>
            <p className='text-gray-600 leading-6 text-center'>
              Do you need to talk or are you ready to listen? Whatever your
              preference, we've got you covered.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className='flex flex-col items-center p-4 bg-white rounded-lg shadow-xl'
          >
            <div className='flex w-16 h-16 p-2 mb-2 border border-yellowOrange'>
              <img
                src={matchedImage}
                alt='Illustration of two people chatting'
              />
            </div>
            <h3 className='text-2xl font-bold mb-4'>Get matched</h3>
            <p className='text-gray-600 leading-6 text-center'>
              We'll match you with someone who complements your role. Don't
              worry if it takes a little while - we want to make sure we find
              the perfect match for you!
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className='flex flex-col items-center p-4 bg-white rounded-lg shadow-xl'
          >
            <div className='flex w-16 h-16 p-2 mb-2 border border-yellowOrange'>
              <img
                src={chatImage}
                alt='Illustration of a person with a mask over their face'
                className='w-16'
              />
            </div>
            <h3 className='text-2xl font-bold mb-4'>Chat it out</h3>
            <p className='text-gray-600 leading-6 text-center'>
              Once we've found your match, you'll be taken to a private and
              secure chat room. Our platform is completely judgment-free, so you
              can feel free to open up without fear of being criticized.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className='flex flex-col items-center p-4 bg-white rounded-lg shadow-xl'
          >
            <div className='flex w-16 h-16 p-2 mb-2 border border-yellowOrange'>
              <img
                src={careImage}
                alt='Illustration of two hands holding a heart'
                className='w-16'
              />
            </div>
            <h3 className='text-2xl font-bold mb-4'>Take care of yourself</h3>
            <p className='text-gray-600 leading-6 text-center'>
              After your chat is over, we'll give you some tips and resources
              for taking care of your mental health. Whether you need to talk to
              a professional or just want to learn some relaxation techniques,
              we've got your back.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
