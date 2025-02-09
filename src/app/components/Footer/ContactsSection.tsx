'use client';

import React from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactsSection = () => {
  return (
    <section className="flex flex-col gap-6 max-w-[280px]">
      <h2 className="visually-hidden">Contacts</h2>
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
      <p className="text-sm/7 mobile:text-base/7 text-white/50">
        Fit Physical Pvt Ltd is for build and fitness body
      </p>
      <address className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <FaMapMarkerAlt className="text-2xl text-accent" />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm mobile:text-base text-white/50 hover:text-accent"
          >
            <div className="flex flex-col">
              <span>Lincoln Park</span>
              <span>Chicago, Illinois</span>
            </div>
          </a>
        </div>

        <div className="flex gap-4 items-center">
          <FaPhoneAlt className="text-2xl text-accent" />
          <div className="flex flex-col">
            <a
              href="tel:5107103464"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mobile:text-base text-white/50 hover:text-accent"
            >
              (510) 710-3464
            </a>
            <a
              href="tel:5106406326"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mobile:text-base text-white/50 hover:text-accent"
            >
              (510) 640-6326
            </a>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <FaEnvelope className="text-2xl text-accent" />
          <div className="flex flex-col">
            <a
              href="mailto:hello@templatesjungle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mobile:text-base text-white/50 hover:text-accent"
            >
              hello@templatesjungle.com
            </a>
            <a
              href="mailto:info@templatesjungle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mobile:text-base text-white/50 hover:text-accent"
            >
              info@templatesjungle.com
            </a>
          </div>
        </div>
      </address>
    </section>
  );
};

export default ContactsSection;
