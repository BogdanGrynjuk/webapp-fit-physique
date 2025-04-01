import clsx from 'clsx';
import React, { useState } from 'react';
import CustomButton from '../UI/CustomButton';

type ForgotPasswordFormProps = {
  containerStyles: string;
  onFlip: () => void;
};
const ForgotPasswordForm = ({
  containerStyles,
  onFlip,
}: ForgotPasswordFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
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
        <h2 className="h2 text-center">Forgot your password</h2>
        <p className="text-sm mobile:text-base text-center">
          We will send you an email with recovery instructions
        </p>
        <div className="flex flex-col gap-2 group w-full">
          <label
            className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold group-hover:text-accent group-focus-within:text-accent transition-all duration-300"
            htmlFor="email"
          >
            email
          </label>
          <input
            className="p-3 w-full h-[40px] md:h-[56px] border border-primary-100/50 placeholder:text-sm mobile:placeholder:text-base placeholder:text-primary-100/50 placeholder:font-medium placeholder:capitalize outline-none"
            type="email"
            id="forgot-password-email"
            name="email"
            placeholder="your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <CustomButton
          type="submit"
          containerStyles="w-[100px] h-[40px] md:w-[162px] md:h-[56px] self-center"
          text={'send'}
        />

        <button
          type="button"
          onClick={onFlip}
          className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold hover:text-accent transition-all duration-300"
        >
          Go back to Sign In
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
