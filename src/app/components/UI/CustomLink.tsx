import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type CustomLinkProps = {
  text: string;
  containerStyles: string;
  href: string;
};

const CustomLink = ({ text, containerStyles, href }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        containerStyles,
        'group relative overflow-hidden bg-accent uppercase flex flex-col items-center justify-center',
      )}
    >
      <span className="absolute top-1/2 left-1/4 h-0 w-64 origin-center bg-black transition-all ease duration-300 -translate-x-20 rotate-45 group-hover:-translate-y-32 group-hover:h-64"></span>
      <span className="relative font-roboto text-white">{text}</span>
    </Link>
  );
};

export default CustomLink;
