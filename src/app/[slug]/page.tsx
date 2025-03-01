'use client';

import React, { useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import { ClassItem, classList } from '@/app//data/classes';
import Header from '../components/ClassDetailPageComponents/Header';
import Image from 'next/image';
import ClassInfo from '../components/ClassDetailPageComponents/ClassInfo';
import ClassBenefits from '../components/ClassDetailPageComponents/ClassBenefits';
import ClassTraining from '../components/ClassDetailPageComponents/ClassTraining';
import ClassEquipment from '../components/ClassDetailPageComponents/ClassEquipment';

const ClassDetailPage = () => {
  const params = useParams();
  const navLinks = [{ name: 'home', href: '/#classes' }];

  const selectedClass: ClassItem | undefined = classList.find(
    (selectedClass) => selectedClass.slug === params.slug,
  );

  useEffect(() => {
    if (!selectedClass || !selectedClass.slug) {
      notFound();
    }
  }, [selectedClass, selectedClass?.slug]);

  if (!selectedClass) {
    return <div>Loading...</div>;
  }

  const { img, name, slug, details } = selectedClass;
  const { about, benefits, trainingFormats, equipment } = details;

  navLinks.push({
    name: `class ${name} `,
    href: `/${slug}`,
  });

  return (
    <>
      <Header navLinks={navLinks} />
      <main className="mt-[100px] pt-8 pb-8 lg:pt-14 lg:pb-14">
        <div className="container mx-auto flex flex-col gap-8 items-center">
          <Image src={img} alt={slug} width={960} height={485} />

          <ClassInfo about={about} />
          <ClassBenefits benefits={benefits} />
          <ClassTraining trainingFormats={trainingFormats} />
          <ClassEquipment equipment={equipment} />
        </div>
      </main>
    </>
  );
};

export default ClassDetailPage;
