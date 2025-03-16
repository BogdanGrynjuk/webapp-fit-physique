'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const partnersList = [
  { name: 'partner-1', img: '/assets/img/brands/brand-1.png', href: '#' },
  { name: 'partner-2', img: '/assets/img/brands/brand-2.png', href: '#' },
  { name: 'partner-3', img: '/assets/img/brands/brand-3.png', href: '#' },
  { name: 'partner-4', img: '/assets/img/brands/brand-4.png', href: '#' },
  { name: 'partner-5', img: '/assets/img/brands/brand-5.png', href: '#' },
];

const Partners = () => {
  const width = '200px';
  const height = '100px';
  const quantity = partnersList.length;

  return (
    <section className="pt-8 pb-8 lg:pt-14 lg:pb-14">
      <div className="container mx-auto">
        <h2 className="visually-hidden">Our Partners</h2>

        <div
          className="w-full overflow-hidden"
          style={{
            height,
            maskImage:
              'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
          }}
        >
          <ul
            style={{ minWidth: `calc(${width} * ${quantity})`, height }}
            className="relative w-full flex items-center group"
          >
            {partnersList.map((partner, index) => (
              <li
                key={index}
                className="absolute animate-autoRun"
                style={{
                  width,
                  height,
                  left: '-200px',
                  animationDelay: `${index * 3}s`,
                }}
              >
                <Link
                  href={partner.href}
                  className="relative block"
                  style={{ width, height }}
                >
                  <Image
                    src={partner.img}
                    alt={partner.name}
                    fill
                    sizes="200px"
                    className="opacity-50 hover:opacity-100 object-cover transition-all duration-300"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <style jsx>
          {`
            @keyframes autoRun {
              from {
                left: calc(${width} * (-1));
              }
              to {
                left: 100%;
              }
            }

            .animate-autoRun {
              animation: autoRun ${quantity * 3}s linear infinite;
            }

            .group:hover .animate-autoRun {
              animation-play-state: paused;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Partners;
