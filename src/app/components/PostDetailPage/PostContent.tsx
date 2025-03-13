'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn, staggerFadeIn } from '@/app/lib/variants';

import { Post, PostContentType } from '@/app/data/posts';

type PostContentProps = Pick<Post, 'content'>;
const PostContent = ({ content }: PostContentProps) => {
  return (
    <motion.div
      variants={staggerFadeIn(0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.01 }}
      className="w-full flex flex-col gap-4"
    >
      {content.map((block, index) => {
        const delay = (index + 1) * 0.4;
        switch (block.type) {
          case PostContentType.Text:
            return (
              <motion.p
                variants={fadeIn('left', delay)}
                key={index}
                className="text-sm mobile:text-base text-justify flex items-center"
              >
                {block.text}
              </motion.p>
            );

          case PostContentType.List:
            return (
              <motion.div
                variants={fadeIn('left', delay)}
                key={index}
                className="flex flex-col gap-2"
              >
                {block.heading && <h4>{block.heading}</h4>}
                <ul className="flex flex-col gap-2">
                  {block.items.map(({ title, text }, index) => (
                    <li key={index}>
                      {title && (
                        <p className="text-lg mb-1">
                          <strong>{title}</strong>
                        </p>
                      )}
                      <p className="text-sm ml-6 mobile:text-base flex items-center gap-2 text-justify">
                        {!title && (
                          <span className="w-2 h-2 bg-accent flex-shrink-0"></span>
                        )}
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          default:
            return null;
        }
      })}
    </motion.div>
  );
};

export default PostContent;
