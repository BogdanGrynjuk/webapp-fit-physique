import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { scale } from '@/app/lib/variants';

import { PostAuthor } from '@/app/data/posts';

type PostQuoteProps = {
  containerStyles: string;
  quote: PostAuthor['quote'];
  authorName: PostAuthor['name'];
};
const PostQuote = ({ containerStyles, quote, authorName }: PostQuoteProps) => {
  return (
    <motion.div
      variants={scale(0.2)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      className={containerStyles}
    >
      <blockquote className="h4 text-center text-accent uppercase tracking-[1px] font-semibold">
        {quote}
      </blockquote>
      <Link
        href={`/trainers/${authorName}`}
        className="self-end text-sm group mobile:text-base flex gap-1"
      >
        <span className="lowercase text-primary-300">by</span>
        <span className="uppercase tracking-[1px] font-semibold group-hover:text-accent transition-all duration-300">
          {authorName}
        </span>
      </Link>
    </motion.div>
  );
};

export default PostQuote;
