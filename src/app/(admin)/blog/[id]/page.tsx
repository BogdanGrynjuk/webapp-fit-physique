'use client';

import React, { useEffect } from 'react';

import { notFound, useParams } from 'next/navigation';

import { posts } from '@/app/data/posts';

import Header from '@/app/components/BlogPageComponents/Header';

import { FaUser, FaRegClock, FaComments } from 'react-icons/fa';
import PostImg from '@/app/components/PostDetailPage/PostImg';

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

  let dateString = '';
  let commentCounter = 0;

  if (post) {
    const dateObj = new Date(post.date);
    const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
    const month = dateObj.toLocaleString('en-US', { month: 'long' });
    const year = dateObj.getFullYear();

    dateString = `${month} ${day}, ${year}`;
    commentCounter = post.comments.length;
  }

  return (
    <>
      <Header navLinks={navLinks} />
      <main className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
        <div className="container mx-auto flex flex-col gap-8 items-center">
          {post && (
            <>
              <div className="flex flex-col gap-2 items-center text-center">
                <h1 className="h2">{post.title}</h1>
                <p className="text-sm mobile:text-base max-w-[600px] mx-auto">
                  {post.shortDescription}
                </p>
              </div>

              <div>
                <PostImg title={post.title} img={post.img} />
                <p>
                  <FaUser /> <span>{post.author.name}</span> ||
                  <FaRegClock /> <span>{dateString}</span> ||
                  <FaComments /> <span>{commentCounter}</span>
                </p>
              </div>

              <div className="grid grid-cols-1">
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
