import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { scale, staggerFadeIn } from '@/app/lib/variants';

import { Post } from '@/app/data/posts';

type PostListProps = {
  posts: Pick<
    Post,
    'id' | 'title' | 'shortDescription' | 'date' | 'img' | 'author'
  >[];
};
const PostList = ({ posts }: PostListProps) => {
  return (
    <motion.ul
      variants={staggerFadeIn(0.8)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true, amount: 0.01 }}
      className="w-full max-w-[1024px] flex flex-col gap-4"
    >
      {posts.map(
        ({ id, title, shortDescription, date, img, author }, index) => {
          const dateObj = new Date(date);
          const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
          const month = dateObj.toLocaleString('en-US', { month: 'long' });
          const year = dateObj.getFullYear();

          const dateString = `${month} ${day}, ${year}`;

          const delay = (index + 1) * 0.2;
          return (
            <motion.li key={id} variants={scale(delay)}>
              <Link
                href={`/blog/${id}`}
                className="p-4 flex flex-col bg-gray-200 group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-max-[700px] grid grid-cols-1 md:grid-cols-[1fr_25%] gap-4">
                  <h6 className="h6 text-center md:text-left md:col-start-1 md:row-start-1 group-hover:text-accent transition-all duration-300">
                    {title}
                  </h6>
                  <div className="mx-auto w-full max-w-[400px] aspect-[1280/850]  md:col-start-2 md:row-start-1 md:row-span-3">
                    <Image src={img} alt={title} width={1280} height={850} />
                  </div>
                  <p className="text-sm mobile:text-base text-justify md:text-start md:col-start-1 md:row-start-2">
                    {shortDescription}
                  </p>
                  <p className="text-primary-100/50 uppercase text-[12px] text-end tracking-[1px] font-semibold md:col-start-1 md:row-start-3">
                    {author.name} || {dateString}
                  </p>
                </div>
              </Link>
            </motion.li>
          );
        },
      )}
    </motion.ul>
  );
};

export default PostList;
