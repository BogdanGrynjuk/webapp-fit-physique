'use client';

import React from 'react';

import { PostComment } from '@/app/data/posts';
import CommentCard from './CommentCard';

type PostCommentsProps = { comments: PostComment[] };
const PostCommentsSection = ({ comments }: PostCommentsProps) => {
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-8">
        <h2 className="h4">Comments ({comments.length})</h2>
        <ul className="flex flex-col gap-4">
          {comments.map(({ user, photo, date, text }, index) => {
            return (
              <li key={index}>
                <CommentCard
                  user={user}
                  photo={photo}
                  date={date}
                  text={text}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PostCommentsSection;
