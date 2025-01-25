'use client';

import React, { useState } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import clsx from 'clsx';
import { MdClose, MdMenu } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  const handleCloseMobileNav = () => {
    setIsOpenMobileNav(!isOpenMobileNav);
  };

  return (
    <header
      className={clsx(
        'fixed top-0 h-[100px] w-full max-w-[1920px] transition-all duration-100 z-50 bg-primary-200',
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between bg-primary-200">
        <ScrollLink
          to="hero"
          offset={-124}
          spy={true}
          smooth={true}
          duration={1000}
          className="cursor-pointer"
        >
          <Image
            src={'/assets/img/logo.png'}
            width={117}
            height={55}
            alt="icon fit physique"
          />
        </ScrollLink>

        <MobileNav
          containerStyles={clsx(
            isOpenMobileNav
              ? 'top-[100px] p-4 border-t border-white/10'
              : 'top-[calc(-100%-100px)] pt-0 pb-0 border-white/0 overflow-hidden',
            'xl:hidden absolute left-0 w-full flex flex-col items-center justify-center text-center bg-primary-200 transition-all duration-500 z-[-10]',
          )}
          onClose={handleCloseMobileNav}
        />

        <DesktopNav containerStyles="items-center gap-4 hidden xl:flex" />
        <div className="flex items-center gap-4 text-white">
          <div className="flex items-center gap-4 text-base font-medium ">
            <button type="button" className="text-4xl">
              <CgProfile />
            </button>
          </div>
          <button
            type="button"
            className="text-4xl xl:hidden"
            onClick={handleCloseMobileNav}
          >
            {isOpenMobileNav ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
