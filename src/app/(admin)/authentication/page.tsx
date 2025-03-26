'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

import Header from '@/app/components/Layout/Header';
import SignInForm from '@/app/components/AuthenticationPageComponents/SignInForm';
import SignUpForm from '@/app/components/AuthenticationPageComponents/SignUpForm';
import Image from 'next/image';
import CustomButton from '@/app/components/UI/CustomButton';

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'authentication', href: '/authentication' },
];

const AuthenticationPage = () => {
  const [isActiveModeSignUp, setIsActiveModeSignUp] = useState(false);
  const handleChangeMode = () => setIsActiveModeSignUp(!isActiveModeSignUp);
  return (
    <>
      <Header links={navLinks} />
      <main
        className={clsx(
          'relative w-full min-h-[calc(100vh-100px)] overflow-hidden mt-[100px]',
          'before:absolute before:h-[200vh] before:aspect-square before:left-[50%] before:bottom-[65%] before:-translate-x-1/2 before:bg-primary-200 before:transition-all before:duration-[1800ms] before:ease-in-out before:rounded-full before:z-[6]',
          'md:before:aspect-[1/1] md:before:w-[200vw] md:before:top-0 md:before:right-[50%] md:before:left-auto md:before:bottom-auto md:before:-translate-y-1/2 md:before:translate-x-0',
          isActiveModeSignUp &&
            'before:!bottom-[35%] before:-translate-x-1/2 before:translate-y-full md:before:!translate-x-full',
        )}
      >
        <div
          className={clsx(
            'relative w-full min-h-[calc(100vh-100px)] left-0 top-0 container mx-auto pt-8 pb-8 lg:pt-14 lg:pb-14 flex flex-col md:gap-8',
            'md:justify-center',
          )}
        >
          <div
            className={clsx(
              'transition-all duration-1000 delay-[700ms] ease-in-out z-[5]',
              'relative w-full left-[50%] -translate-x-1/2 -translate-y-1/2 ',
              'relative md:top-1/2 md:w-1/2 md:grid md:grid-cols-1',
              isActiveModeSignUp
                ? '-translate-x-1/2 md:-translate-x-1/2 md:translate-y-0 md:left-[25%]'
                : '-translate-x-1/2 translate-y-1/2 md:-translate-x-1/2 md:translate-y-0 md:left-[75%]',
            )}
          >
            <SignInForm
              containerStyles={clsx(
                'row-start-1 col-start-1 overflow-hidden transition-all duration-[200ms] delay-[700ms]',
                isActiveModeSignUp ? 'z-[1] opacity-0' : 'opacity-1 z-[2]',
              )}
            />
            <SignUpForm
              containerStyles={clsx(
                'row-start-1 col-start-1 overflow-hidden transition-all duration-[200ms] delay-[700ms]',
                isActiveModeSignUp ? 'opacity-1 z-[2]' : 'z-[1] opacity-0',
              )}
            />
          </div>

          <div className="absolute inset-0 h-full w-full grid grid-cols-1 grid-rows-[1f_2fr_1fr] md:grid-cols-2 md:grid-rows-1 gap-16">
            <div
              className={clsx(
                'flex row-start-1 row-end-2  md:flex-col items-center justify-around text-center z-[6]',
                'md:pl-[16px]',
                isActiveModeSignUp
                  ? 'pointer-events-none'
                  : 'pointer-events-auto',
              )}
            >
              <div
                className={clsx(
                  'flex flex-col gap-2 items-center text-center text-white transition-transform duration-[900ms] ease-in-out delay-[600ms]',
                  isActiveModeSignUp
                    ? '-translate-x-[100vw]'
                    : 'translate-x-[0]',
                )}
              >
                <h2 className="h2">Welcome Back!</h2>
                <p className="text-sm mobile:text-base">
                  To keep connected with us please login with your personal info
                </p>

                <CustomButton
                  type="submit"
                  containerStyles="w-[100px] h-[40px] md:w-[162px] md:h-[56px] self-center"
                  text={'sign up'}
                  onClick={handleChangeMode}
                />
              </div>
              <Image
                src={'/assets/img/athlete_meditating.webp'}
                width={500}
                height={500}
                className={clsx(
                  'hidden md:block transition-transform duration-[1100ms] ease-in-out delay-[400ms]',
                  isActiveModeSignUp
                    ? '-translate-x-[100vw]'
                    : 'translate-x-[0]',
                )}
                alt="athlete meditating"
              />
            </div>

            <div
              className={clsx(
                'flex row-start-3 row-end-4 md:row-start-1 md:row-end-2 md:flex-col items-center justify-around text-center z-[6]',
                'md:pr-[16px]',
                isActiveModeSignUp
                  ? 'pointer-events-auto'
                  : 'pointer-events-none',
              )}
            >
              <div
                className={clsx(
                  'text-white transition-transform duration-[900ms] ease-in-out delay-[600ms]',
                  isActiveModeSignUp ? 'translate-x-0' : 'translate-x-[100vw]',
                )}
              >
                <h2 className="h2">Hello Friend</h2>
                <p className="text-sm mobile:text-base">
                  Enter your personal details and start journey with us
                </p>

                <CustomButton
                  type="submit"
                  containerStyles="w-[100px] h-[40px] md:w-[162px] md:h-[56px] self-center"
                  text={'sign in'}
                  onClick={handleChangeMode}
                />
              </div>
              <Image
                src={'/assets/img/athlete_running.webp'}
                width={500}
                height={500}
                className={clsx(
                  'hidden md:block transition-transform duration-[1100ms] ease-in-out delay-[400ms]',
                  isActiveModeSignUp ? 'translate-x-0' : 'translate-x-[100vw]',
                )}
                alt="athlete running"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthenticationPage;
