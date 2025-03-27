import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import CustomButton from '../UI/CustomButton';

type AuthSwitchPanelProps = {
  isSignUpMode: boolean;
  toggleMode: () => void;
};

const AuthSwitchPanel = ({
  isSignUpMode,
  toggleMode,
}: AuthSwitchPanelProps) => {
  return (
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
          isSignUpMode ? 'pointer-events-none' : 'pointer-events-auto',
        )}
      >
        <div
          className={clsx(
            'flex flex-col gap-2 items-center text-center text-white transition-transform duration-[900ms] ease-in-out delay-[600ms]',
            isSignUpMode
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
            isSignUpMode
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
          isSignUpMode ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          className={clsx(
            'flex flex-col gap-2 text-white transition-transform duration-[900ms] ease-in-out delay-[600ms]',
            isSignUpMode
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
            isSignUpMode
              ? 'translate-y-0 lg:translate-y-0 lg:translate-x-0'
              : 'translate-y-[100vh] lg:translate-y-0 lg:translate-x-[100vw]',
          )}
          alt="athlete running"
        />
      </div>
    </div>
  );
};

export default AuthSwitchPanel;
