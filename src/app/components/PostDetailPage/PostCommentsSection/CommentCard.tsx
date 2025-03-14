import React from 'react';
import Image from 'next/image';
import { FaReply } from 'react-icons/fa6';
import { PostComment } from '@/app/data/posts';

const getColorFromName = (
  name: string,
): { bgColor: string; textColor: string } => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash % 360);
  const lightness = 40 + (hash % 30);
  const bgColor = `hsl(${hue}, 70%, ${lightness}%)`;
  const textColor = lightness > 60 ? '#111' : '#fff';

  return { bgColor, textColor };
};

const CommentCard = ({ user, photo, date, text }: PostComment) => {
  const { bgColor, textColor } = getColorFromName(user);

  const dateObj = new Date(date);
  const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const year = dateObj.getFullYear();

  const dateString = `${month} ${day}, ${year}`;

  return (
    <div className="flex gap-4">
      <div
        className="rounded-full w-[50px] h-[50px] border-2 border-accent flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {photo ? (
          <Image
            src={photo}
            width={50}
            height={50}
            alt={`photo ${user}`}
            className="rounded-full"
          />
        ) : (
          <p className="text-lg font-semibold">{user[0]}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm flex gap-4 tracking-[1px]">
          <span className="font-oswald font-semibold">{user}</span>
          <span>||</span>
          <span className="uppercase">{dateString}</span>
        </p>
        <p className="text-sm mobile:text-base">{text}</p>
        <button
          type="button"
          className="flex gap-1 items-center text-sm mobile:text-base font-semibold group"
        >
          <FaReply className="group-hover:[transform:rotateY(360deg)] group-hover:text-accent transition-all duration-300" />
          <span className="group-hover:text-accent transition-all duration-300">
            Reply
          </span>
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
