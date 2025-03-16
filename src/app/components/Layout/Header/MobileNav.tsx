'use client';

import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLinkItem, ScrollLinkItem } from './Header';
import Link from 'next/link';
import clsx from 'clsx';

const MobileNav = ({
  containerStyles,
  onClose,
  links,
}: {
  containerStyles: string;
  onClose: () => void;
  links: ScrollLinkItem[] | NavLinkItem[];
}) => {
  const isScrollLinkItem = (
    link: ScrollLinkItem | NavLinkItem,
  ): link is ScrollLinkItem => 'target' in link && 'offset' in link;

  const [isActiveLink, setIsActiveLink] = useState(false);
  useEffect(() => {
    setIsActiveLink(true);
  }, []);

  return (
    <nav className={containerStyles}>
      {links.map((link, index, array) => {
        return isScrollLinkItem(link) ? (
          <ScrollLink
            key={index}
            to={link.target}
            offset={link.offset}
            spy={true}
            smooth={true}
            duration={300}
            isDynamic={true}
            activeClass={'active'}
            onClick={onClose}
            className="relative cursor-pointer py-1 px-2 text-base text-white font-medium uppercase hover:text-accent after:absolute after:bottom-1 after:left-2 after:border-b-2 after:border-accent after:content-[''] after:w-0 after:transition-all after:duration-500 transition-all duration-300"
          >
            {link.name}
          </ScrollLink>
        ) : (
          <Link
            href={link.href}
            key={index}
            onClick={onClose}
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

export default MobileNav;
