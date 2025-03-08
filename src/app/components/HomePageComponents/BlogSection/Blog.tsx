'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '@/app/lib/variants';

import PostsSlider from './PostsSlider';
import CustomButton from '../../UI/CustomButton';
import { useRouter } from 'next/navigation';

const Blog = () => {
  const router = useRouter();

  return (
    <section
      className="bg-primary-300 pt-8 pb-8 lg:pt-14 lg:pb-14 text-white"
      id="blog"
    >
      <div className="container mx-auto flex flex-col gap-5">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Blog
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <PostsSlider />
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto"
        >
          <CustomButton
            onClick={() => router.push('/blog')}
            text={'view all'}
            containerStyles="w-[100px] h-[40px] md:w-[162px] md:h-[56px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
