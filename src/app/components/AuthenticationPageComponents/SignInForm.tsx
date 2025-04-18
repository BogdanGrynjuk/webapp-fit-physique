'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

import CustomButton from '../UI/CustomButton';

type SignInFormProps = {
  containerStyles: string;
  onFlip: () => void;
};
const SignInForm = ({ containerStyles, onFlip }: SignInFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form
        className={clsx(
          'flex flex-col items-center justify-start gap-4 w-full max-w-[420px] mx-auto',
          containerStyles,
        )}
        onSubmit={handleSubmit}
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
            id="sign-in-name"
            name="name"
            placeholder="your name"
            value={formData.name}
            onChange={handleInputChange}
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
            id="sign-in-password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <CustomButton
          type="submit"
          containerStyles="w-[100px] h-[40px] md:w-[162px] md:h-[56px] self-center"
          text={'login'}
        />

        <button
          type="button"
          onClick={onFlip}
          className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold hover:text-accent transition-all duration-300"
        >
          Forgot your password?
        </button>
      </form>
    </>
  );
};

export default SignInForm;
