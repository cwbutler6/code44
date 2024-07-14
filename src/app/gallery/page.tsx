import React from 'react';
import GalleryComponent from '@/components/Gallery';
import { getGalleryData } from '@/lib/api';

export default async function GalleryPage() {
  const { galleryItems, error } = await getGalleryData();
  return <GalleryComponent galleryItems={galleryItems ?? []} error={error} />;
}
