'use client';

import React from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { expandWidth, rotateY } from '@/app/lib/variants';
import { Post } from '@/app/data/posts';

type PostImgProps = Pick<Post, 'title' | 'img'>;

const PostImg = ({ title, img }: PostImgProps) => {
  return (
    <motion.div className="relative overflow-hidden w-full max-w-[1280px] p-1 sm:p-2">
      <motion.div
        variants={expandWidth}
        initial={'hidden'}
        animate={'show'}
        className="absolute aspect-square bg-accent top-0 left-0"
      />

      <motion.div
        variants={expandWidth}
        initial={'hidden'}
        animate={'show'}
        className="absolute aspect-square bg-accent bottom-0 right-0"
      />

      <motion.div
        variants={rotateY}
        initial={'hidden'}
        animate={'show'}
        className="relative z-20"
      >
        <Image
          src={img}
          alt={`image for post ${title}`}
          width={1280}
          height={850}
        />
      </motion.div>
    </motion.div>
  );
};

export default PostImg;
