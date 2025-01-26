import React, { useEffect, useState } from 'react';
import CustomButton from './CustomButton';
import { useMediaQuery } from 'react-responsive';
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
  const [isClient, setIsClient] = useState(false);
  const isLargeHeight = useMediaQuery({ query: '(min-height: 480px)' });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={clsx(
        'h-full lg:flex lg:justify-end',
        isLargeHeight && 'pt-40',
      )}
    >
      <div className="flex flex-col items-center lg:items-start lg:max-w-[710px]">
        <h1 className="h2 md:h1 flex flex-col gap-0 md:gap-2 lg:gap-4 text-center lg:text-left mb-2">
          <strong className="text-accent tracking-tighter">{title}</strong>
          <span className=" text-white tracking-normal text-2xl md:text-4xl lg:text-7xl font-light ">
            {subtitle}
          </span>
        </h1>
        <p className="font-roboto text-sm mobile:text-base text-white text-center lg:text-left mb-4">
          {description}
        </p>
        <CustomButton
          text={buttonText}
          containerStyles={'w-[162px] h-[56px]'}
        />
      </div>
    </div>
  );
};

export default HeroSlide;
