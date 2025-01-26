'use client';

import React from 'react';
import CustomButton from './CustomButton';

import clsx from 'clsx';

const HeroSlide = ({
  title,
  subtitle,
  description,
  buttonText,
}: {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}) => {
  return (
    <div
      className={clsx(
        'h-full flex mt-[130px] mobile:mt-0 md:items-center justify-center lg:justify-end',
      )}
    >
      <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
        <h1 className="h2 md:h1 flex flex-col gap-0 md:gap-2 lg:gap-4 text-center lg:text-left mb-2">
          <strong className="text-accent tracking-tighter">{title}</strong>
          <span className=" text-white tracking-normal text-2xl md:text-4xl lg:text-7xl font-light ">
            {subtitle}
          </span>
        </h1>
        <p className="font-roboto text-sm mobile:text-base tracking-wide text-white text-center lg:text-left mb-4">
          {description}
        </p>
        <CustomButton
          text={buttonText}
          containerStyles={'w-[146px] h-[40px] md:w-[162px] md:h-[56px]'}
        />
      </div>
    </div>
  );
};

export default HeroSlide;
