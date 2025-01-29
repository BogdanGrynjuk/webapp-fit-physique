import clsx from 'clsx';
import React from 'react';

const CustomButton = ({
  text,
  containerStyles,
}: {
  text: string;
  containerStyles: string;
}) => {
  return (
    <button
      type="button"
      className={clsx(
        containerStyles,
        'group relative overflow-hidden bg-accent uppercase cursor-pointer',
      )}
    >
      <span className="absolute top-1/2 h-0 w-64 origin-center bg-black transition-all ease duration-300 -translate-x-20 rotate-45 group-hover:-translate-y-32 group-hover:h-64"></span>
      <span className="relative font-roboto text-white">{text}</span>
    </button>
  );
};

export default CustomButton;
