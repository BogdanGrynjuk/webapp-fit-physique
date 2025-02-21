'use client';

import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import CustomButton from '../UI/CustomButton';

const InquiryBlock = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    <section className="flex flex-col gap-8">
      <motion.h3
        variants={fadeIn('up', 0.2)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="h2 text-center"
      >
        Ask us anything
      </motion.h3>
      <motion.p
        variants={fadeIn('up', 0.3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="text-sm mobile:text-base"
      >
        If your question is not listed in our Frequently Asked Questions, you
        can call us at (510) 710-3464 or simply send us your message using the
        form below.
      </motion.p>
      <motion.form
        variants={fadeIn('up', 0.4)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.05 }}
        className="flex flex-col gap-4 w-full max-w-[420px] mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 group">
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
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex flex-col gap-2 group">
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
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex flex-col gap-2 group">
          <label
            className="uppercase text-[12px] text-primary-100/50 tracking-[1px] font-semibold  group-hover:text-accent group-focus-within:text-accent"
            htmlFor="message"
          >
            message
          </label>
          <textarea
            className="p-3 w-full h-auto lg:max-h-[264px] xl:max-h-[240px] border border-primary-100/50 placeholder:text-sm mobile:placeholder:text-base placeholder:text-primary-100/50 placeholder:font-medium placeholder:capitalize outline-none"
            id="message"
            name="message"
            placeholder="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <CustomButton
          type="submit"
          containerStyles="w-[100px] h-[40px] md:w-[162px] md:h-[56px] self-center"
          text={'send'}
        />
      </motion.form>
    </section>
  );
};

export default InquiryBlock;
