'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

import CustomButton from '../UI/CustomButton';

type SignUpFormProps = {
  containerStyles: string;
};
const SignUpForm = ({ containerStyles }: SignUpFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <form
      className={clsx(
        'flex flex-col items-center justify-start gap-4 w-full max-w-[420px] mx-auto',
        containerStyles,
      )}
      onSubmit={handleSubmit}
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
          id="sign-up-name"
          name="name"
          placeholder="your name"
          value={formData.name}
          onChange={handleInputChange}
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
          id="sign-up-email"
          name="email"
          placeholder="Example@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
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
          id="sign-up-password"
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
        text={'register'}
      />
    </form>
  );
};

export default SignUpForm;
