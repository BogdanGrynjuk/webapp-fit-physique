'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { photoGallery } from '@/app/data/photoGallery';

const getImageSize = async (src: string) => {
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = () =>
      reject(new Error(`Не вдалося завантажити зображення: ${src}`));
  });
};

const GallerySection = () => {
  const [images, setImages] = useState<
    { id: string; src: string; alt: string; width: number; height: number }[]
  >([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageSizes = await Promise.all(
        photoGallery.map(async (photo) => {
          const { width, height } = await getImageSize(photo.src);
          return { ...photo, width, height };
        }),
      );
      setImages(imageSizes);
    };
    loadImages();
  }, []);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  return (
    <section className="flex flex-col gap-6">
      <h4 className="h4">Gallery</h4>
      <ul id="gallery" className="columns-3 gap-[10px]">
        {images.map((photo) => (
          <li key={photo.id} className="mb-[10px]">
            <Link
              href={photo.src}
              data-pswp-width={photo.width}
              data-pswp-height={photo.height}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-300"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GallerySection;
