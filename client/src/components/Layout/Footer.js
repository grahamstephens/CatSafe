import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-100 py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className='text-gray-600'>&copy; 2023 CatSafe</p>
        <div className='flex'>
          <Link
            to='/'
            className='mr-6 text-gray-600 hover:text-purple-700 font-medium'
          >
            Home
          </Link>
          <Link
            to='/faq'
            className='mr-6 text-gray-600 hover:text-purple-700 font-medium'
          >
            FAQ
          </Link>
          <Link
            to='/terms'
            className='mr-6 text-gray-600 hover:text-purple-700 font-medium'
          >
            Terms of Service
          </Link>
          <Link
            to='/privacy'
            className='text-gray-600 hover:text-purple-700 font-medium'
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
