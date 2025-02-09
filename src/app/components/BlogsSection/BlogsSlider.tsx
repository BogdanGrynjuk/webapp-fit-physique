'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import BlogCard from './BlogCard';
import SwiperNavButtons from '../UI/SwiperNavButtons';

import { blogsList } from '@/app/data/blogs';

const BlogsSlider = () => {
  return (
    <div>
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        className="max-h-[420px]"
      >
        {blogsList.map((blog, index) => (
          <SwiperSlide key={index}>
            <BlogCard
              title={blog.title}
              img={blog.img}
              date={blog.date}
              id={blog.id}
            />
          </SwiperSlide>
        ))}
        <SwiperNavButtons
          containerStyles={
            'absolute z-50 left-0 right-0 top-[calc(250px/2-40px/2)] md:top-[calc(250px/2-56px/2)] max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto flex gap-1 justify-between pointer-events-none'
          }
          buttonStyles={
            'bg-accent w-[40px] h-[40px] md:w-[56px] md:h-[56px] border border-accent flex items-center justify-center text-white hover:bg-primary-300/50 transitional-all duration-300 pointer-events-auto'
          }
          iconStyles={'text-xl md:text-2xl'}
        />
      </Swiper>
    </div>
  );
};

export default BlogsSlider;
