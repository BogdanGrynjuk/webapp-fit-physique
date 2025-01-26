'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/navigation';

import HeroSlide from './HeroSlide';
import SwiperNavButtons from './SwiperNavButtons';

const slides = [
  {
    title: 'Hard Work',
    subtitle: 'is for Every Success',
    description:
      'Start by taking inspirations, continue it to give inspirations',
    buttonText: 'Get started',
  },
  {
    title: 'Real Results',
    subtitle: 'in Minimum Time',
    description:
      'Push past your limits with high-impact workouts crafted for rapid and lasting transformations',
    buttonText: 'Start Now',
  },
  {
    title: 'Be Strong',
    subtitle: 'Live Better',
    description:
      'Empower yourself to live a healthier life through fitness, mindfulness, and community support',
    buttonText: 'Join Us',
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      className="h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <HeroSlide
            title={slide.title}
            subtitle={slide.subtitle}
            description={slide.description}
            buttonText={slide.buttonText}
          />
        </SwiperSlide>
      ))}
      <SwiperNavButtons
        containerStyles={
          'absolute z-50 w-full h-[170px] mobile:h-auto flex justify-center md:justify-end bottom-2 md:bottom-4 lg:bottom-8 right-0 flex gap-1'
        }
        buttonStyles={
          'w-[40px] h-[40px] md:w-[56px] md:h-[56px] border border-accent flex items-center justify-center text-white hover:bg-accent transitional-all duration-300'
        }
        iconStyles={'text-xl md:text-2xl'}
      />
    </Swiper>
  );
};

export default HeroSlider;
