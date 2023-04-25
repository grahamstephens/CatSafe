import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-white shadow-sm fixed w-full z-50'>
      <div className='container mx-auto py-2 flex justify-between items-center'>
        <div className='flex items-center'>
          <img src={logo} alt='Logo' className='w-12 h-12 mr-2' />
          <Link
            to='/'
            className='text-3xl font-bold text-[#22161B] tracking-wide '
          >
            CatSafe
          </Link>
        </div>

        <div className='hidden md:block'>
          <ul className='flex space-x-8'>
            <li>
              <Link to='/about' className='text-gray-600 hover:text-gray-900'>
                Our story
              </Link>
            </li>
            <li>
              <Link to='/contact' className='text-gray-600 hover:text-gray-900'>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/login' className='text-gray-600 hover:text-gray-900'>
                Login
              </Link>
            </li>
            <li>
              <Link
                to='/signup'
                className='bg-yellowOrange text-white py-2 px-4 rounded-md text-sm font-medium'
              >
                Get started
              </Link>
            </li>
          </ul>
        </div>

        <div className='md:hidden flex items-center'>
          <button
            className='text-gray-600 hover:text-gray-900'
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className='md:hidden absolute top-16 left-0 w-full bg-white shadow-lg px-4 pt-4 pb-2'>
            <ul className='flex flex-col space-y-4'>
              <li>
                <Link to='/about' className='text-gray-600 hover:text-gray-900'>
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-600 hover:text-gray-900'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
