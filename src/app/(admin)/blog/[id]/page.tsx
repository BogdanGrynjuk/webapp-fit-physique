'use client';

import React, { useEffect } from 'react';

import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';

import { fadeIn } from '@/app/lib/variants';

import { posts } from '@/app/data/posts';

import Image from 'next/image';
import Header from '@/app/components/BlogPageComponents/Header';

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
      <main className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
        <div className="container mx-auto flex flex-col gap-8 items-center">
          {post && (
            <>
              <div>
                <h1 className="h2 text-center text-accent">{post.title}</h1>
                <p>
                  author {post.author.name} || {post.date}
                </p>
              </div>

              <div className="grid grid-cols-1">
                <div>
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={1280}
                    height={850}
                  />
                </div>

                <p className="whitespace-pre-line">{post.content}</p>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default PostDetailPage;
