import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import clsx from 'clsx';

const SocialLink = ({
  containerStyles,
  href,
  Icon,
}: {
  containerStyles: string;
  href: string;
  Icon: IconType;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        containerStyles,
        'group relative overflow-hidden flex flex-col items-center justify-center rounded-full  after:absolute after:content-[""] after:top-[100%] after:left-0 after:w-full after:h-full hover:after:top-0 after:bg-accent after:transition-all after:duration-500',
      )}
    >
      <Icon className="relative z-10 transition-all duration-500 text-current text-xl group-hover:text-white group-hover:[transform:rotateY(360deg)]" />
    </Link>
  );
};

export default SocialLink;
