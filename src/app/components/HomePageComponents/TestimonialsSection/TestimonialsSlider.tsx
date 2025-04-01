'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn, staggerFadeIn } from '@/app/lib/variants';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { customerReviews } from '@/app/data/customerReviews';
import TestimonialCard from './TestimonialCard';

const TestimonialsSlider = () => {
  return (
    <motion.div
      variants={staggerFadeIn()}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Swiper
        loop={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (_, className) => `<span class="${className}"></span>`,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {customerReviews.map((customer, index) => {
          const animationDelay = (index + 1) * 0.2;
          return (
            <SwiperSlide key={index}>
              <motion.div variants={fadeIn('up', animationDelay)}>
                <TestimonialCard
                  photo={customer.photo}
                  name={customer.name}
                  review={customer.review}
                />
              </motion.div>
            </SwiperSlide>
          );
        })}
        <div className="custom-pagination mt-7 flex justify-center items-center gap-4 h-5" />
      </Swiper>
    </motion.div>
  );
};

export default TestimonialsSlider;
