import clsx from 'clsx';
import React from 'react';

type CustomButtonProps = {
  text: string;
  containerStyles: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const CustomButton = ({
  text,
  containerStyles,
  onClick,
  type = 'button',
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        containerStyles,
        'group/button relative overflow-hidden bg-accent uppercase cursor-pointer',
      )}
      onClick={onClick}
    >
      <span className="absolute aspect-square bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 scale-y-0 w-[200%] group-hover/button:scale-y-100 transition-all ease duration-300"></span>
      <span className="relative font-roboto text-white">{text}</span>
    </button>
  );
};

export default CustomButton;
