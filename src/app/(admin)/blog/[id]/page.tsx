'use client';

import React, { useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';

import { posts } from '@/app/data/posts';

import Header from '@/app/components/Layout/Header';
import PostCommentsSection from '@/app/components/PostDetailPage/PostCommentsSection';
import PostDetailSection from '@/app/components/PostDetailPage/PostDetailSection';

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
    navLinks.push({
      name: 'post detail',
      href: `/blog/${post.id}`,
    });
  }

  return (
    <>
      <Header links={navLinks} />
      <main className="pt-8 pb-8 lg:pt-14 lg:pb-14 flex flex-col gap-8">
        {post && (
          <>
            <PostDetailSection post={post} />
            <PostCommentsSection comments={post.comments} />
          </>
        )}
      </main>
    </>
  );
};

export default PostDetailPage;
