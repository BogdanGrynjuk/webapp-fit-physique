'use client';

import React, { useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/lib/variants';

import { posts } from '@/app/data/posts';

import Header from '@/app/components/BlogPageComponents/Header';
import PostImg from '@/app/components/PostDetailPage/PostImg';
import PostLabel from '@/app/components/PostDetailPage/PostLabel';

const PostDetailPage = () => {
  const params = useParams();

  const post = posts.find((post) => post.id === params.id);

  useEffect(() => {
    if (!params.id || !post) {
      notFound();
    }
  }, [params, post]);

  const navLinks = [
    { name: 'home', href: '/#blog' },
    { name: 'blog', href: '/blog' },
  ];

  if (post) {
    const maxLength = 25;
    const shortTitle =
      post.title.length > maxLength
        ? post.title.slice(0, maxLength) + '...'
        : post.title;
    navLinks.push({
      name: shortTitle,
      href: `/blog/${post.id}`,
    });
  }

  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        {post && (
          <section className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
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
                    author={post.author}
                    date={post.date}
                    containerStyles={
                      'flex flex-col mobile:flex-row  mobile:gap-4 mobile:mt-2 md:mt-4'
                    }
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1">
                <p className="whitespace-pre-line">{post.content}</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default PostDetailPage;
