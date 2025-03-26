'use client';

import React from 'react';
import clsx from 'clsx';

import CustomButton from '../UI/CustomButton';
import Link from 'next/link';

type SignInFormProps = {
  containerStyles: string;
};
const SignInForm = ({ containerStyles }: SignInFormProps) => {
  return (
    <>
      <form
        className={clsx(
          'flex flex-col items-center justify-center gap-4 w-full max-w-[420px] mx-auto',
          containerStyles,
        )}
        onSubmit={() => {
          console.log('submit');
        }}
      >
        <h2 className="h2">Sign In</h2>
        <div className="flex flex-col gap-2 group w-full">
          <label
            className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold group-hover:text-accent group-focus-within:text-accent transition-all duration-300"
            htmlFor="name"
          >
            name
          </label>
          <input
            className="p-3 w-full h-[40px] md:h-[56px] border border-primary-100/50 placeholder:text-sm mobile:placeholder:text-base placeholder:text-primary-100/50 placeholder:font-medium placeholder:capitalize outline-none"
            type="text"
            id="name"
            name="name"
            placeholder="your name"
            value={''}
            onChange={() => console.log('change name')}
            required
          />
        </div>

        <div className="flex flex-col gap-2 group w-full">
          <label
            className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold  group-hover:text-accent group-focus-within:text-accent transition-all duration-300"
            htmlFor="password"
          >
            password
          </label>
          <input
            className="p-3 w-full h-[40px] md:h-[56px] border border-primary-100/50 placeholder:text-sm mobile:placeholder:text-base placeholder:text-primary-100/50 placeholder:font-medium outline-none"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={''}
            onChange={() => console.log('change password')}
            required
          />
        </div>

        <CustomButton
          type="submit"
          containerStyles="w-[100px] h-[40px] md:w-[162px] md:h-[56px] self-center"
          text={'login'}
        />

        <Link
          href=""
          className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold hover:text-accent transition-all duration-300"
        >
          Forgot your password?
        </Link>
      </form>
    </>
  );
};

export default SignInForm;
