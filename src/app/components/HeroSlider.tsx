'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

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
      'Push your limits with workouts designed to deliver the fastest results for your fitness goals.',
    buttonText: 'Join Us',
  },
  {
    title: 'Be Strong',
    subtitle: 'Live Better',
    description:
      'Empower yourself to live a healthier life through fitness, mindfulness, and community support.',
    buttonText: 'Join Us',
  },
];

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
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
          'absolute z-50 bottom-2 md:bottom-4 lg:bottom-8 right-0 flex gap-2'
        }
        buttonStyles={
          'w-[56px] h-[56px] border border-accent flex items-center justify-center text-white hover:bg-accent transitional-all duration-300'
        }
        iconStyles={'text-2xl'}
      />
    </Swiper>
  );
};

export default HeroSlider;
