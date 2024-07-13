"use client";
import React, { useState } from "react";
import { GalleryItem, Media } from "@/payload-types";
import ErrorAlert from "./ErrorAlert";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const GalleryComponent = ({ galleryItems, error }: { galleryItems: GalleryItem[], error?: string }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  if (error) {
    return (
      <div className="min-h-screen bg-warm-black text-warm-cream flex items-center justify-center">
        <ErrorAlert error={error} />
      </div>
    );
  }

  if (!galleryItems || galleryItems.length === 0) {
    return (
      <div className="min-h-screen bg-warm-black text-warm-cream flex items-center justify-center">
        <Card className="max-w-lg bg-warm-black">
          <CardContent className="text-center py-8">
            <p className="text-warm-cream/90">No gallery items available at the moment. <br /> Please check back later.</p>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.eventType === activeTab);

  const tabs = [
    { value: 'all', label: 'All' },
    { value: 'venue', label: 'Venue' },
    { value: 'wedding', label: 'Weddings' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'social', label: 'Social' },
  ];

  return (
    <div className="min-h-screen bg-warm-black text-warm-cream">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-serif text-center mb-8 text-warm-gold">Our Gallery</h1>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-warm-black/30 border border-warm-gold/30 rounded-md p-1">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === tab.value
                    ? 'bg-warm-gold text-warm-black'
                    : 'text-warm-cream hover:bg-warm-gold/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-warm-black/80 border-warm-gold/30 overflow-hidden">
              <CardContent className="p-0">
                {(item.media as Media).mimeType?.includes("image/") ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CMS_URL}${(item.media as Media).url}` as string}
                    alt={(item.media as Media).alt as string}
                    width={400}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                    className="cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setLightboxItem(item)}
                  />
                ) : (
                  <video
                    src={(item.media as Media).url as string}
                    controls
                    className="w-full aspect-video"
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {lightboxItem && (
        <div className="fixed inset-0 bg-warm-black/90 flex items-center justify-center z-50" onClick={() => setLightboxItem(null)}>
          <div className="max-w-4xl max-h-[90vh] relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_CMS_URL}${(lightboxItem.media as Media).url}` as string}
              alt={(lightboxItem.media as Media).alt as string}
              layout="intrinsic"
              width={800}
              height={600}
              objectFit="contain"
            />
            <Button 
              className="absolute top-2 right-2 bg-warm-gold text-warm-black"
              onClick={() => setLightboxItem(null)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
