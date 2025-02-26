'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { FaCheck, FaXmark } from 'react-icons/fa6';

import MembershipCard from './MembershipCard';

const membershipCards = [
  {
    title: 'standard',
    price: 30,
    benefits: [
      { Icon: FaCheck, text: 'includes membership' },
      { Icon: FaCheck, text: 'access to all gym facilities' },
      { Icon: FaXmark, text: 'diet plan included' },
      { Icon: FaCheck, text: 'health and fitness tips' },
      { Icon: FaXmark, text: 'monday-friday gym access' },
      { Icon: FaCheck, text: 'full access to everything' },
      { Icon: FaXmark, text: 'no additional amenities' },
    ],
  },
  {
    title: 'ultimate',
    price: 45,
    benefits: [
      { Icon: FaCheck, text: 'includes membership' },
      { Icon: FaCheck, text: 'access to all gym facilities' },
      { Icon: FaXmark, text: 'diet plan included' },
      { Icon: FaCheck, text: 'health and fitness tips' },
      { Icon: FaCheck, text: 'monday-friday gym access' },
      { Icon: FaCheck, text: 'full access to everything' },
      { Icon: FaXmark, text: 'no additional amenities' },
    ],
  },
  {
    title: 'professional',
    price: 60,
    benefits: [
      { Icon: FaCheck, text: 'includes membership' },
      { Icon: FaCheck, text: 'access to all gym facilities' },
      { Icon: FaCheck, text: 'diet plan included' },
      { Icon: FaCheck, text: 'health and fitness tips' },
      { Icon: FaCheck, text: 'monday-friday gym access' },
      { Icon: FaCheck, text: 'full access to everything' },
      { Icon: FaCheck, text: 'no additional amenities' },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        el: '.custom-pagination',
        clickable: true,
        renderBullet: (_, className) => `<span class="${className}"></span>`,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {membershipCards.map((card, index) => (
        <SwiperSlide key={index}>
          <MembershipCard
            title={card.title}
            price={card.price}
            benefits={card.benefits}
          />
        </SwiperSlide>
      ))}
      <div className="custom-pagination flex justify-center items-center gap-4 h-5" />
    </Swiper>
  );
};

export default MembershipSlider;
