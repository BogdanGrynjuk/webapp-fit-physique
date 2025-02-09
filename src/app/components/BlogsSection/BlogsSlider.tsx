'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import BlogCard from './BlogCard';
import SwiperNavButtons from '../UI/SwiperNavButtons';

const blogsList = [
  {
    id: '1',
    img: '/assets/img/blog/post1.jpg',
    date: '2024-07-31',
    title: 'Maintain a Perfect Structure After Workout',
  },
  {
    id: '2',
    img: '/assets/img/blog/post2.jpg',
    date: '2024-07-24',
    title: 'How to be Motivated For all Workouts',
  },
  {
    id: '3',
    img: '/assets/img/blog/post3.jpg',
    date: '2020-07-21',
    title: 'How to Do Complete Workout Without Tired',
  },
  {
    id: '4',
    img: '/assets/img/blog/post4.jpg',
    date: '2024-07-15',
    title: 'Workout In Perfect Way to Hit The Muscles',
  },
  {
    id: '5',
    img: '/assets/img/blog/post5.jpg',
    date: '2024-07-15',
    title: 'Slim & Strong: Effective Cardio Routines for Women',
  },
  {
    id: '6',
    img: '/assets/img/blog/post6.jpg',
    date: '2024-07-04',
    title: 'The Science of Recovery: Optimize Your Rest for Better Results',
  },
  {
    id: '7',
    img: '/assets/img/blog/post7.jpg',
    date: '2024-06-28',
    title: 'Boost Your Endurance: The Best Cardio Workouts for Stamina',
  },
  {
    id: '8',
    img: '/assets/img/blog/post8.jpg',
    date: '2024-06-11',
    title: 'Core Power: Essential Exercises for a Stronger Midsection',
  },
  {
    id: '9',
    img: '/assets/img/blog/post9.jpg',
    date: '2024-05-27',
    title: 'Maximize Your Performance: Tips for Functional Training',
  },
];

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
