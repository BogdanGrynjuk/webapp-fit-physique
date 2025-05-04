'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import { Post } from '@/app/data/posts';

import PostQuote from './PostQuote';
import PostContent from './PostContent';
import PostLabel from './PostLabel';
import PostImg from './PostImg';

type PostDetailSectionProps = { post: Omit<Post, 'comments'> };

const PostDetailSection = ({ post }: PostDetailSectionProps) => {
  return (
    <section className="mt-[100px]">
      <div className="container mx-auto flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-2 items-center text-center">
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className="h2"
          >
            {post.title}
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm mobile:text-base max-w-[600px] mx-auto"
          >
            {post.shortDescription}
          </motion.p>
        </div>

        <div>
          <PostImg title={post.title} img={post.img} />
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
          >
            <PostLabel
              author={post.author.name}
              date={post.date}
              containerStyles={
                'flex flex-col mobile:flex-row  mobile:gap-4 mobile:mt-2 md:mt-4'
              }
            />
          </motion.div>
        </div>

        <PostContent content={post.content} />
        <PostQuote
          containerStyles={
            'w-full min-h-[150px] p-4 flex flex-col items-center justify-center gap-2 bg-gray-200 border-l-8 border-accent'
          }
          quote={post.author.quote}
          authorName={post.author.name}
          postId={post.id}
        />
      </div>
    </section>
  );
};

export default PostDetailSection;
