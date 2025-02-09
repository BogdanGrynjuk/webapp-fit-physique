import React from 'react';
import ContactsSection from './ContactsSection';
import BlogsSection from './BlogsSection';
import GallerySection from './GallerySection';
import NewsletterSection from './NewsletterSection';

const Footer = () => {
  return (
    <footer
      className="bg-primary-300 pt-8 pb-8 lg:pt-14 lg:pb-14 text-white"
      id="footer"
    >
      <div className="container mx-auto">
        <h2 className="visually-hidden">Footer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <ContactsSection />
          <BlogsSection />
          <GallerySection />
          <NewsletterSection />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
