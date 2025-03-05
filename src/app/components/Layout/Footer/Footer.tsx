'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn, staggerFadeIn, scale } from '@/app/lib/variants';

import ContactsSection from './ContactsSection';
import BlogsSection from './BlogsSection';
import GallerySection from './GallerySection';
import NewsletterSection from './NewsletterSection';

import SocialLink from '../../UI/SocialLink';
import { FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer
      className="bg-primary-300 pt-8 pb-8 lg:pt-20 lg:pb-20 text-white"
      id="footer"
    >
      <div className="container mx-auto">
        <h2 className="visually-hidden">Footer</h2>

        <motion.div
          variants={staggerFadeIn()}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          <motion.div variants={scale(0.2)}>
            <ContactsSection />
          </motion.div>
          <motion.div variants={scale(0.4)}>
            <BlogsSection />
          </motion.div>
          <motion.div variants={scale(0.6)}>
            <GallerySection />
          </motion.div>
          <motion.div variants={scale(0.8)}>
            <NewsletterSection />
          </motion.div>
        </motion.div>
      </div>

      <div className="my-8 lg:my-14 border-t border-white/40"></div>
      <motion.div
        variants={fadeIn('up', 0.6)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto flex flex-col gap-4 mobile:flex-row items-center justify-between"
      >
        <p className="text-white/70 text-sm mobile:text-base">
          &copy; Copyright {new Date().getFullYear()}{' '}
          <span className="uppercase font-oswald text-white text-xl">
            <span className="text-accent">Fit</span>
            Physique
          </span>
          . All Right Reserved
        </p>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <SocialLink
              href={'http://facebook.com'}
              Icon={FaFacebookF}
              containerStyles="w-[44px] h-[44px]"
            />
          </li>
          <li>
            <SocialLink
              href={'http://twitter.com'}
              Icon={FaXTwitter}
              containerStyles="w-[44px] h-[44px]"
            />
          </li>
          <li>
            <SocialLink
              href={'http://youtube.com'}
              Icon={FaYoutube}
              containerStyles="w-[44px] h-[44px]"
            />
          </li>
        </ul>
      </motion.div>
    </footer>
  );
};

export default Footer;
