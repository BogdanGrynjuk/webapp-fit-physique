'use client';

import React from 'react';
import clsx from 'clsx';

import useAuthMode from '@/app/hooks/useAuthMode';

import Header from '@/app/components/Layout/Header';
import AuthForms from '@/app/components/AuthenticationPageComponents/AuthForms';
import AuthSwitchPanel from '@/app/components/AuthenticationPageComponents/AuthSwitchPanel';

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'authentication', href: '/authentication' },
];

const AuthenticationPage = () => {
  const { isSignUpMode, toggleMode } = useAuthMode();
  return (
    <>
      <Header links={navLinks} />
      <main
        className={clsx(
          'relative w-full min-h-[calc(100vh-100px)] overflow-hidden mt-[100px]',
          'before:absolute before:h-[1500px] before:w-[1500px] before:left-[50%] before:bottom-[65%] before:-translate-x-1/2 before:bg-primary-200 before:transition-all before:duration-[1800ms] before:ease-in-out before:rounded-full before:z-[6]',
          'sm:before:left-[20%] lg:before:h-[3000px] lg:before:w-[3000px] lg:before:top-0 lg:before:right-[50%] lg:before:left-auto lg:before:bottom-auto lg:before:-translate-y-1/2 lg:before:translate-x-0',
          isSignUpMode &&
            'before:!bottom-[35%] before:-translate-x-1/2 before:translate-y-full lg:before:!translate-x-full',
        )}
      >
        <div
          className={clsx(
            'relative w-full min-h-[calc(100vh-100px)] left-0 top-0 container mx-auto pt-8 pb-8 flex flex-col',
            'lg:pt-14 lg:pb-14 lg:justify-center lg:gap-8',
          )}
        >
          <AuthForms isSignUpMode={isSignUpMode} />

          <AuthSwitchPanel
            isSignUpMode={isSignUpMode}
            toggleMode={toggleMode}
          />
        </div>
      </main>
    </>
  );
};

export default AuthenticationPage;
