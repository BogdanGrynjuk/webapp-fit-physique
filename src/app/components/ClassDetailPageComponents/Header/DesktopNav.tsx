'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const DesktopNav = ({
  containerStyles,
  links,
}: {
  containerStyles: string;
  links: { name: string; href: string }[];
}) => {
  const [isActiveLink, setIsActiveLink] = useState(false);
  useEffect(() => {
    setIsActiveLink(true);
  }, []);
  return (
    <nav className={containerStyles}>
      {links.map((link, index, array) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={clsx(
              "relative cursor-pointer py-1 px-2 text-base text-white font-medium uppercase hover:text-accent after:absolute after:bottom-1 after:left-2 after:border-b-2 after:border-accent after:content-[''] after:w-0 after:transition-all after:duration-500 transition-all duration-300",
              index === array.length - 1 && isActiveLink && 'active',
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
