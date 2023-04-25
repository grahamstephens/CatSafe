import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineChat, HiOutlineUserGroup } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';

const VNavBar = () => {
  return (
    <nav className='w-56 bg-gray-900 h-screen px-4 py-8 flex flex-col justify-between'>
      <div>
        <NavLink
          to='/chat'
          className='text-white flex items-center py-2 px-4 rounded transition duration-200 hover:bg-gray-800'
        >
          <HiOutlineChat className='mr-3' />
          Chat
        </NavLink>
        <NavLink
          to='/resources'
          className='text-white flex items-center py-2 px-4 rounded transition duration-200 hover:bg-gray-800'
        >
          <HiOutlineUserGroup className='mr-3' />
          Resources
        </NavLink>
        <NavLink
          to='/notifications'
          className='text-white flex items-center py-2 px-4 rounded transition duration-200 hover:bg-gray-800'
        >
          <IoIosNotificationsOutline className='mr-3' />
          Notifications
        </NavLink>
      </div>
      <div>
        <NavLink
          to='/'
          className='text-white flex items-center py-2 px-4 rounded transition duration-200 hover:bg-gray-800'
        >
          <FiLogOut className='mr-3' />
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

const VLayout = ({ children }) => {
  return (
    <div className='flex'>
      <VNavBar />
      <div className='flex-1 bg-gray-100 overflow-y-auto'>{children}</div>
    </div>
  );
};

export default VLayout;
