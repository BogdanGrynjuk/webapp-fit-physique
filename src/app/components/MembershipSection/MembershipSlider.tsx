'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { MdClose } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';

const membershipCards = [
  {
    title: 'standard',
    price: 30,
    benefits: [
      { icon: FaCheck, text: 'includes membership' },
      { icon: FaCheck, text: 'access to all gym facilities' },
      { icon: MdClose, text: 'diet plan included' },
      { icon: FaCheck, text: 'health and fitness tips' },
      { icon: MdClose, text: 'monday-friday gym access' },
      { icon: FaCheck, text: 'full access to everything' },
      { icon: MdClose, text: 'no additional amenities' },
    ],
  },
  {
    title: 'ultimate',
    price: 45,
    benefits: [
      { icon: FaCheck, text: 'includes membership' },
      { icon: FaCheck, text: 'access to all gym facilities' },
      { icon: MdClose, text: 'diet plan included' },
      { icon: FaCheck, text: 'health and fitness tips' },
      { icon: FaCheck, text: 'monday-friday gym access' },
      { icon: FaCheck, text: 'full access to everything' },
      { icon: MdClose, text: 'no additional amenities' },
    ],
  },
  {
    title: 'professional',
    price: 60,
    benefits: [
      { icon: FaCheck, text: 'includes membership' },
      { icon: FaCheck, text: 'access to all gym facilities' },
      { icon: FaCheck, text: 'diet plan included' },
      { icon: FaCheck, text: 'health and fitness tips' },
      { icon: FaCheck, text: 'monday-friday gym access' },
      { icon: FaCheck, text: 'full access to everything' },
      { icon: FaCheck, text: 'no additional amenities' },
    ],
  },
];

const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        786: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="min-h-[680px]"
    >
      {membershipCards.map((item, index) => (
        <SwiperSlide key={index}>
          <div>
            <h4>slide {index + 1}</h4>
            <h4>membership card{item.title}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MembershipSlider;
