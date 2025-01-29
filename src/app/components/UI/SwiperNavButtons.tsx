'use client';

import React from 'react';

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useSwiper } from 'swiper/react';

const SwiperNavButtons = ({
  containerStyles,
  buttonStyles,
  iconStyles,
}: {
  containerStyles: string;
  buttonStyles: string;
  iconStyles: string;
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className={buttonStyles}
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className={buttonStyles}
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default SwiperNavButtons;
