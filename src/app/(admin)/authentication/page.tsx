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
  const toggleMode = () => setIsActiveModeSignUp(!isActiveModeSignUp);
  return (
    <>
      <Header links={navLinks} />
      <main
        className={clsx(
          'relative w-full min-h-[calc(100vh-100px)] overflow-hidden mt-[100px]',
          'before:absolute before:h-[1500px] before:w-[1500px] before:left-[50%] before:bottom-[65%] before:-translate-x-1/2 before:bg-primary-200 before:transition-all before:duration-[1800ms] before:ease-in-out before:rounded-full before:z-[6]',
          'sm:before:left-[20%] lg:before:h-[3000px] lg:before:w-[3000px] lg:before:top-0 lg:before:right-[50%] lg:before:left-auto lg:before:bottom-auto lg:before:-translate-y-1/2 lg:before:translate-x-0',
          isActiveModeSignUp &&
            'before:!bottom-[35%] before:-translate-x-1/2 before:translate-y-full lg:before:!translate-x-full',
        )}
      >
        <div
          className={clsx(
            'relative w-full min-h-[calc(100vh-100px)] left-0 top-0 container mx-auto pt-8 pb-8 flex flex-col',
            'lg:pt-14 lg:pb-14 lg:justify-center lg:gap-8',
          )}
        >
          <div
            className={clsx(
              'relative w-full left-[50%] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 delay-[700ms] ease-in-out z-[5]',
              'lg:top-1/2 lg:w-1/2 lg:grid lg:grid-cols-1',
              isActiveModeSignUp
                ? '-translate-x-1/2 lg:-translate-x-1/2 lg:translate-y-0 lg:left-[25%]'
                : '-translate-x-1/2 translate-y-1/2 lg:-translate-x-1/2 lg:translate-y-0 lg:left-[75%]',
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

          <div
            className={clsx(
              'absolute inset-0 h-full w-full grid grid-cols-1 grid-rows-[auto_1fr_auto]',
              'lg:grid-cols-2 lg:grid-rows-1 lg:gap-16',
            )}
          >
            <div
              className={clsx(
                'mt-8 flex row-start-1 row-end-2 lg:flex-col items-center justify-evenly text-center z-[6]',
                'lg:mt-0 lg:pl-[16px]',
                isActiveModeSignUp
                  ? 'pointer-events-none'
                  : 'pointer-events-auto',
              )}
            >
              <div
                className={clsx(
                  'flex flex-col gap-2 items-center text-center text-white transition-transform duration-[900ms] ease-in-out delay-[600ms]',
                  isActiveModeSignUp
                    ? '-translate-y-[100vh] lg:translate-y-0 lg:-translate-x-[100vw]'
                    : 'translate-y-0 lg:translate-y-0 lg:translate-x-[0]',
                )}
              >
                <h2 className="h2">Welcome Back!</h2>
                <p className="text-sm mobile:text-base">
                  To keep connected with us please login with your personal info
                </p>
                <p className="mt-6 font-semibold text-white/70 text-[12px] uppercase tracking-[1px]">
                  If you do not have an account yet
                </p>
                <CustomButton
                  type="submit"
                  containerStyles="w-[100px] h-[40px] lg:w-[162px] lg:h-[56px] self-center"
                  text={'sign up'}
                  onClick={toggleMode}
                />
              </div>
              <Image
                src={'/assets/img/athlete_meditating.webp'}
                width={500}
                height={500}
                className={clsx(
                  'hidden transition-transform duration-[1100ms] ease-in-out delay-[400ms]',
                  'sm:block sm:w-[180px] sm:h-[180px] lg:w-auto lg:h-auto',
                  isActiveModeSignUp
                    ? '-translate-y-[100vh] lg:translate-y-0 lg:-translate-x-[100vw]'
                    : 'translate-y-0 lg:translate-y-0 lg:translate-x-[0]',
                )}
                alt="athlete meditating"
              />
            </div>
            <div
              className={clsx(
                'mb-8 flex row-start-3 row-end-4  items-center justify-evenly text-center z-[6]',
                'lg:mb-0 lg:row-start-1 lg:row-end-2 lg:flex-col lg:pr-[16px]',
                isActiveModeSignUp
                  ? 'pointer-events-auto'
                  : 'pointer-events-none',
              )}
            >
              <div
                className={clsx(
                  'flex flex-col gap-2 text-white transition-transform duration-[900ms] ease-in-out delay-[600ms]',
                  isActiveModeSignUp
                    ? 'translate-y-0 lg:translate-y-0 lg:translate-x-0'
                    : 'translate-y-[100vh] lg:translate-y-0 lg:translate-x-[100vw]',
                )}
              >
                <h2 className="h2">Hello Friend</h2>
                <p className="text-sm mobile:text-base">
                  Enter your personal details and start journey with us
                </p>

                <p className="mt-6 font-semibold text-white/70 text-[12px] uppercase tracking-[1px]">
                  Do you already have an account?
                </p>

                <CustomButton
                  type="submit"
                  containerStyles="w-[100px] h-[40px] lg:w-[162px] lg:h-[56px] self-center"
                  text={'sign in'}
                  onClick={toggleMode}
                />
              </div>
              <Image
                src={'/assets/img/athlete_running.webp'}
                width={500}
                height={500}
                className={clsx(
                  'hidden  transition-transform duration-[1100ms] ease-in-out delay-[400ms]',
                  'sm:block sm:w-[180px] sm:h-[180px] lg:w-auto lg:h-auto',
                  isActiveModeSignUp
                    ? 'translate-y-0 lg:translate-y-0 lg:translate-x-0'
                    : 'translate-y-[100vh] lg:translate-y-0 lg:translate-x-[100vw]',
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
