import React from 'react';
import Link from 'next/link';

import { blogsList } from '@/app/data/blogs';

const BlogsSection = () => {
  const latestBlogs = [...blogsList]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="flex flex-col gap-6 max-w-[300px]">
      <h4 className="h4">Recent blog posts</h4>
      <ul className="flex flex-col">
        {latestBlogs.map((blog) => {
          const dateObj = new Date(blog.date);
          const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
          const month = dateObj.toLocaleString('en-US', { month: 'long' });
          const year = dateObj.getFullYear();

          const dateString = `${month} ${day}, ${year}`;

          return (
            <li
              key={blog.id}
              className="border-b border-white/50 last:border-0"
            >
              <Link href={'#'} className="py-3 group block">
                <h6 className="h6 text-white/70 group-hover:text-accent">
                  {blog.title}
                </h6>
                <span className="uppercase text-[12px] text-white/40 tracking-[1px] font-semibold">
                  {dateString}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BlogsSection;
