'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn, staggerFadeIn } from '@/app/lib/variants';

import { PostComment } from '@/app/data/posts';
import CommentCard from './CommentCard';

type PostCommentsProps = { comments: PostComment[] };
const PostCommentsSection = ({ comments }: PostCommentsProps) => {
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-8">
        <motion.h2
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.01 }}
          className="h4"
        >
          Comments ({comments.length})
        </motion.h2>
        <motion.ul
          variants={staggerFadeIn(0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.01 }}
          className="flex flex-col gap-4"
        >
          {comments.map(({ user, photo, date, text }, index) => {
            const delay = (index + 1) * 0.4;
            return (
              <motion.li variants={fadeIn('left', delay)} key={index}>
                <CommentCard
                  user={user}
                  photo={photo}
                  date={date}
                  text={text}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default PostCommentsSection;
