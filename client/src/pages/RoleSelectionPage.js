import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

const RoleSelectionPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelection = async (role) => {
    setSelectedRole(role);
    setIsWaiting(true);

    setTimeout(() => {
      setIsWaiting(false);
      navigate('/chat');
    }, 5000);
    // setIsWaiting(false);
    // navigate('/hello');

    // try {
    //   const response = await axios.post(
    //     'http://localhost:3005/role-selection',
    //     { role }
    //   );
    //   const chatId = response.data.chatId;
    //   navigate.push(`/chat/${chatId}`);
    // } catch (error) {
    //   setIsWaiting(false);
    //   console.error(error);
    // }
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      <div className='flex items-center justify-center w-1/2'>
        <div className='px-16'>
          <h1 className='text-4xl text-center font-bold text-gray-800'>
            Welcome to <span>CatSafe</span>!
          </h1>
          <Player
            src='https://assets9.lottiefiles.com/packages/lf20_nevksmtt.json'
            autoplay
            loop
          />
        </div>
      </div>
      <div className='flex items-center justify-center w-1/2 bg-gradient-to-r from-blue-500 to-blue-800'>
        <div className='bg-white w-4/5 p-20 rounded-md'>
          <p className='text-lg text-gray-600'>Please select your role:</p>
          <div className='mt-8 flex flex-col space-y-4'>
            <button
              className={`${
                selectedRole === 'venter' ? 'bg-[#6568F3]' : 'bg-[#ECCA54]'
              } text-white text-lg font-medium py-3 rounded-md`}
              onClick={() => handleRoleSelection('venter')}
              disabled={isWaiting}
            >
              Venter
            </button>
            <button
              className={`${
                selectedRole === 'listener' ? 'bg-blue-500' : 'bg-[#E39D74]'
              } text-white text-lg font-medium py-3 rounded-md`}
              onClick={() => handleRoleSelection('listener')}
              disabled={isWaiting}
            >
              Listener
            </button>
            {isWaiting ? (
              <p className='text-gray-500 text-lg font-medium mt-8'>
                Waiting for a match...
              </p>
            ) : (
              <p>&nbsp;</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
