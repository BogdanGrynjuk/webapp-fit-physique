'use client';

import React, { useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import { classList } from '@/app//data/classes';
import Header from '../components/ClassDetailPageComponents/Header';
import Image from 'next/image';

const ClassDetailPage = () => {
  const params = useParams();

  const selectedClass = classList.find(
    (selectedClass) => selectedClass.slug === params.slug,
  );

  useEffect(() => {
    if (!selectedClass?.slug || !selectedClass) {
      notFound();
    }
  }, [selectedClass?.slug, selectedClass]);

  const navLinks = [{ name: 'home', href: '/#classes' }];

  if (selectedClass) {
    navLinks.push({
      name: `class ${selectedClass.name} `,
      href: `/${selectedClass.slug}`,
    });
  }

  return (
    <>
      <Header navLinks={navLinks} />
      <main className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
        <div className="container mx-auto flex flex-col gap-8 items-center">
          {selectedClass && (
            <>
              <h1>{selectedClass.name}</h1>
              <p>{selectedClass.description}</p>
              <Image
                src={selectedClass.img}
                alt={selectedClass.slug}
                width={960}
                height={485}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default ClassDetailPage;
