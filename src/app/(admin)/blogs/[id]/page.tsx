'use client';

import React, { useEffect } from 'react';

import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';

import { fadeIn } from '@/app/lib/variants';

import { blogsList } from '@/app/data/blogs';

import Image from 'next/image';
import Header from '@/app/components/BlogsPageComponents/Header';

const BlogDetailPage = () => {
  const params = useParams();

  const blog = blogsList.find((blog) => blog.id === params.id);

  useEffect(() => {
    if (!params.id || !blog) {
      notFound();
    }
  }, [params, blog]);

  const navLinks = [
    { name: 'home', href: '/#team' },
    { name: 'blogs', href: '/blogs' },
  ];

  if (blog) {
    const maxLength = 25;
    const shortTitle =
      blog.title.length > maxLength
        ? blog.title.slice(0, maxLength) + '...'
        : blog.title;
    navLinks.push({
      name: shortTitle,
      href: `/blogs/${blog.id}`,
    });
  }

  return (
    <>
      <Header navLinks={navLinks} />
      <main className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
        <div className="container mx-auto flex flex-col gap-8 items-center">
          {blog && (
            <>
              <motion.h1
                variants={fadeIn('up', 0.2)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: true, amount: 0.2 }}
                className="h1 text-center text-accent"
              >
                {blog.title}
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-y-4 gap-x-8">
                <motion.div
                  variants={fadeIn('right', 0.4)}
                  initial={'hidden'}
                  whileInView={'show'}
                  viewport={{ once: true, amount: 0.2 }}
                  className="md:col-start-1 md:row-start-1 xl:col-start-1 xl:row-start-1"
                >
                  <div>
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={280}
                      height={233}
                    />
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default BlogDetailPage;
