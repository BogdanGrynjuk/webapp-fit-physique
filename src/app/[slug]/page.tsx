'use client';

import React, { useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import { ClassItem, classList } from '@/app//data/classes';
import Header from '../components/ClassDetailPageComponents/Header';
import ClassInfo from '../components/ClassDetailPageComponents/ClassInfo';
import ClassBenefits from '../components/ClassDetailPageComponents/ClassBenefits';
import ClassTraining from '../components/ClassDetailPageComponents/ClassTraining';
import ClassEquipment from '../components/ClassDetailPageComponents/ClassEquipment';
import ClassCoaches from '../components/ClassDetailPageComponents/ClassCoaches';

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
  }, [selectedClass]);

  if (!selectedClass) {
    return <div>Loading...</div>;
  }

  const { name, slug, details } = selectedClass;
  const { about, benefits, trainingFormats, equipment } = details;

  navLinks.push({
    name: `${name} class`,
    href: `/${slug}`,
  });

  return (
    <>
      <Header navLinks={navLinks} />
      <main className="mt-[100px] pb-8 lg:pb-14 flex flex-col gap-8 items-center">
        <ClassInfo about={about} />
        <ClassBenefits benefits={benefits} />
        <ClassTraining trainingFormats={trainingFormats} />
        <ClassCoaches classTitle={name} slug={slug} />
        <ClassEquipment equipment={equipment} />
      </main>
    </>
  );
};

export default ClassDetailPage;
