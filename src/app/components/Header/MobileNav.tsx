'use client';

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const links = [
  { name: 'home', target: 'hero', offset: -100 },
  { name: 'about us', target: 'about', offset: -100 },
  { name: 'class', target: 'classes', offset: -100 },
  { name: 'team', target: 'team', offset: -100 },
  { name: 'prices', target: 'membership', offset: -100 },
  { name: 'testimonials', target: 'testimonials', offset: -100 },
  { name: 'faq', target: 'faq', offset: -100 },
  { name: 'blog', target: 'blog', offset: -100 },
  { name: 'contact us', target: 'footer', offset: -300 },
];

const MobileNav = ({
  containerStyles,
  onClose,
}: {
  containerStyles: string;
  onClose: () => void;
}) => {
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <ScrollLink
          key={index}
          to={link.target}
          offset={link.offset}
          spy={true}
          smooth={true}
          duration={300}
          activeClass={'active'}
          onClick={onClose}
          className="relative cursor-pointer py-1 px-2 text-base text-white font-medium uppercase hover:text-accent after:absolute after:bottom-1 after:left-2 after:border-b-2 after:border-accent after:content-[''] after:w-0 after:transition-all after:duration-500 transition-all duration-300"
        >
          {link.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default MobileNav;
