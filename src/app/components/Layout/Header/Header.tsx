'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

import { MdClose, MdMenu } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';

export type ScrollLinkItem = {
  name: string;
  target: string;
  offset: number;
};

export type NavLinkItem = {
  name: string;
  href: string;
};

export type HeaderPropsBase = {
  isMainPage?: boolean;
};

type HeaderProps = HeaderPropsBase &
  (
    | {
        isMainPage: true;
        links: ScrollLinkItem[];
      }
    | {
        isMainPage?: false;
        links: NavLinkItem[];
      }
  );

const Header = ({ isMainPage = false, links }: HeaderProps) => {
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
        {isMainPage ? (
          <ScrollLink
            to="hero"
            offset={-100}
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
        ) : (
          <Link href={'/'} className="cursor-pointer">
            <Image
              src={'/assets/img/logo.png'}
              width={117}
              height={55}
              alt="icon fit physique"
            />
          </Link>
        )}

        <MobileNav
          containerStyles={clsx(
            isOpenMobileNav
              ? 'top-[100px] p-4 border-t border-white/10 max-h-[calc(100vh-100px)] overflow-y-auto'
              : 'top-[calc(-100%-100px)] pt-0 pb-0 border-white/0 overflow-hidden',
            'xl:hidden fixed left-0 w-full flex flex-col gap-2 items-center justify-start text-center bg-primary-200 transition-all duration-500 z-[50] scrollbar',
          )}
          onClose={handleCloseMobileNav}
          links={links}
        />

        <DesktopNav
          containerStyles="items-center gap-4 hidden xl:flex"
          links={links}
        />

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
