import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [accountCreated, setAccountCreated] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3005/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('User created successfully');
        // Redirect the user to the login page
        setAccountCreated(true);
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8'>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <div className='mb-8 sm:mx-auto sm:w-full sm:max-w-md text-center'>
            <div className='inline-block text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white border-b-2 border-yellowOrange w-auto'>
              Create Your <span>CatSafe</span> Account
            </div>
          </div>
          {accountCreated && (
            <div
              className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8'
              role='alert'
            >
              <p className='font-bold'>Success</p>
              <p>User created. Redirecting...</p>
            </div>
          )}
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:${
                    errors.email ? 'ring-red-500' : 'ring-blue-500'
                  } sm:text-sm`}
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\uky\.edu$/i,
                  })}
                />
              </div>
              {errors.email && (
                <p className='mt-2 text-sm text-red-600' id='email-error'>
                  Please enter a valid "@uky.edu" email address
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:${
                    errors.password ? 'ring-red-500' : 'ring-blue-500'
                  } sm:text-sm`}
                  {...register('password', { required: true, minLength: 8 })}
                />
              </div>
              {errors.password && (
                <p className='mt-2 text-sm text-red-600' id='password-error'>
                  Please enter a password with at least 8 characters
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium text-gray-700'
              >
                Confirm password
              </label>
              <div className='mt-1'>
                <input
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  autoComplete='current-password'
                  required
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.confirmPassword
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:${
                    errors.confirmPassword ? 'ring-red-500' : 'ring-blue-500'
                  } sm:text-sm`}
                  {...register('confirmPassword', {
                    required: true,
                    minLength: 8,
                    validate: (value) =>
                      value === document.getElementById('password').value,
                  })}
                />
              </div>
              {errors.confirmPassword && (
                <p
                  className='mt-2 text-sm text-red-600'
                  id='confirm-password-error'
                >
                  Please make sure the passwords match
                </p>
              )}
            </div>{' '}
            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellowOrange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
