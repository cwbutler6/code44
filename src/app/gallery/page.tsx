import React from 'react';
import { GalleryItem } from '@/payload-types';
import GalleryComponent from '@/components/Gallery';


async function getGalleryData(): Promise<{ 
  galleryItems: GalleryItem[] | null; 
  error?: string 
}> {
  try {
    const host = process.env.NEXT_PUBLIC_API_URL;
    const port = process.env.PORT;
    const response = await fetch(`${host}:${port}/api/gallery-items`)

    if (!response.ok) {
      throw new Error('Failed to fetch gallery data from CMS')
    }

    const data = await response.json()

    return {
      galleryItems: data.docs
    }
  } catch (error) {
    console.error('Error fetching gallery data:', error)
    return { galleryItems: null, error: 'Failed to load gallery data' }
  }
}

export default async function GalleryPage() {
  const { galleryItems, error } = await getGalleryData();
  return <GalleryComponent galleryItems={galleryItems ?? []} error={error} />;
}
