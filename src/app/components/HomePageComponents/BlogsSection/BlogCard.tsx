import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({
  img,
  date,
  title,
  id,
}: {
  img: string;
  date: string;
  title: string;
  id: string;
}) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('en-US', { month: 'short' });
  const day = dateObj.toLocaleString('en-US', { day: '2-digit' });

  return (
    <Link
      href={''}
      className="max-w-[300px] h-full mx-auto flex flex-col items-center justify-start gap-4 group"
    >
      <div className="relative w-[300px] h-[auto] ">
        <div className="absolute z-10 top-2 left-2 px-2 flex flex-col items-center justify-center border border-accent text-white font-oswald font-medium bg-primary-300/50">
          <span className="text-2xl">{day}</span>
          <span className="text-base">{month}</span>
        </div>
        <Image src={img} alt={`image ${title}`} width={300} height={233} />
      </div>
      <h6 className="h6 group-hover:text-accent">
        {id}: {title}
      </h6>
    </Link>
  );
};

export default BlogCard;
