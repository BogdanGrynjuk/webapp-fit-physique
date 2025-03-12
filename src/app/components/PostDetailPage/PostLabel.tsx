import { Post } from '@/app/data/posts';
import Link from 'next/link';
import React from 'react';

import { LiaUser, LiaClock } from 'react-icons/lia';

type PostLabelProps = Pick<Post, 'author' | 'date'> & {
  containerStyles: string;
};
const PostLabel = ({ author, date, containerStyles }: PostLabelProps) => {
  const dateObj = new Date(date);
  const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const year = dateObj.getFullYear();

  const authorName = author.name;
  const dateString = `${month} ${day}, ${year}`;

  return (
    <div className={containerStyles}>
      <div className="flex gap-2 items-center">
        <LiaUser className="text-2xl font-semibold text-accent" />
        <Link
          href={`/trainers/${authorName}`}
          className="text-primary-100/50 uppercase text-sm mobile:text-base tracking-[1px] font-semibold hover:text-accent transition-all duration-300"
        >
          {authorName}
        </Link>
      </div>

      <div className="flex gap-2 items-center text-primary-100/50 uppercase text-sm mobile:text-base tracking-[1px] font-semibold">
        <LiaClock className="text-2xl text-accent" />
        <span className="text-primary-100/50 uppercase text-sm mobile:text-base tracking-[1px] font-semibold">
          {dateString}
        </span>
      </div>
    </div>
  );
};

export default PostLabel;
