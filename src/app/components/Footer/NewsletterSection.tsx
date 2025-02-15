'use client';

import React, { useState } from 'react';
import CustomButton from '../UI/CustomButton';

const NewsletterSection = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <section className="flex flex-col gap-6">
      <h4 className="h4">Newsletter</h4>
      <p className="text-sm/7 mobile:text-base/7 text-white/70 w-full">
        By subscribing us you will get discount offers and our tips for your
        fitness for good results.
      </p>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="p-3 h-[40px] md:h-[56px] w-full max-w-[320px] text-primary-300 outline-none"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your E-mail Address"
          required
        />

        <CustomButton
          type="submit"
          containerStyles="h-[40px] md:h-[56px] w-[100px] md:w-[162px] xl:w-[150px]"
          text={'Send'}
        />
      </form>
      <p className="text-sm mobile:text-base text-white/40 w-full">
        We will never share your email address with anyone.
      </p>
    </section>
  );
};

export default NewsletterSection;
