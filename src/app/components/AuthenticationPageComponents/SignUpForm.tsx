'use client';

import React from 'react';
import clsx from 'clsx';

import CustomButton from '../UI/CustomButton';

type SignUpFormProps = {
  containerStyles: string;
};
const SignUpForm = ({ containerStyles }: SignUpFormProps) => {
  return (
    <form
      className={clsx(
        'flex flex-col items-center justify-center gap-4 w-full max-w-[420px] mx-auto',
        containerStyles,
      )}
      onSubmit={() => {
        console.log('submit');
      }}
    >
      <h2 className="h2">Create Account</h2>
      <div className="flex flex-col gap-2 group w-full">
        <label
          className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold group-hover:text-accent group-focus-within:text-accent"
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
          className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold  group-hover:text-accent group-focus-within:text-accent"
          htmlFor="email"
        >
          mail address
        </label>
        <input
          className="p-3 w-full h-[40px] md:h-[56px] border border-primary-100/50 placeholder:text-sm mobile:placeholder:text-base placeholder:text-primary-100/50 placeholder:font-medium outline-none"
          type="email"
          id="email"
          name="email"
          placeholder="Example@gmail.com"
          value={''}
          onChange={() => console.log('change email')}
          required
        />
      </div>

      <div className="flex flex-col gap-2 group w-full">
        <label
          className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold  group-hover:text-accent group-focus-within:text-accent"
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
        text={'register'}
      />
    </form>
  );
};

export default SignUpForm;
