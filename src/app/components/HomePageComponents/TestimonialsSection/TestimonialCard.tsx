import React from 'react';

import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa6';

const TestimonialCard = ({
  photo,
  name,
  review,
}: {
  photo: string;
  name: string;
  review: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-start gap-5">
      <Image
        src={photo}
        width={90}
        height={90}
        alt={`photo ${name}`}
        className="rounded-full border-2 border-accent"
      />
      <div className="flex-grow text-center max-w-[380px] flex flex-col justify-between items-center">
        <FaQuoteLeft className="text-2xl text-gray-300 mb-1" />
        <p className="flex-grow text-sm/7 mobile:text-base/7 text-primary-100/50 mb-4">
          {review}
        </p>
        <span className="font-medium text-2xl capitalize">{name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
