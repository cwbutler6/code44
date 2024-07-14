import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { fetchHomePageData } from '@/lib/api';

const LandingPage: React.FC = async () => {
  const { eventPackages, testimonials, error } = await fetchHomePageData()
  if (error) {
    return (
      <div className="min-h-screen bg-warm-black text-warm-cream flex items-center justify-center">
        <Alert variant="destructive" className="max-w-lg">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}. Please try again later or contact support if the problem persists.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm-black text-warm-cream">
      {/* Hero Section with darkened and blurred background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/hero-image.jpg')] bg-cover bg-center blur-sm scale-105"></div>
          <div className="absolute inset-0 bg-warm-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-warm-cream">Luxurious Event Space</h1>
          <p className="text-lg md:text-xl mb-8 text-warm-cream/90">10,000 sq ft of elegance for your special occasions</p>
          <Link href="/contact">
            <Button className="bg-warm-gold hover:bg-warm-gold/90 text-warm-black w-full md:w-auto">
              Book Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-warm-black to-warm-black/98">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 md:mb-12 text-warm-gold">Featured Packages</h2>
        {eventPackages && eventPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {eventPackages.slice(0, 3).map((pkg) => (
              <Card key={pkg.id} className="bg-warm-black/80 border-warm-gold/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-warm-gold text-xl md:text-2xl">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-warm-cream/90 text-sm md:text-base">
                    {pkg.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-warm-black/80 border-warm-gold/30 backdrop-blur-sm">
            <CardContent className="text-center py-8">
              <p className="text-warm-cream/90">No event packages available at the moment. Please check back later.</p>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-warm-cream text-warm-black">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 md:mb-12 text-warm-red">What Our Clients Say</h2>
        {testimonials && testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <Card key={testimonial.id} className="bg-warm-cream/60 border-warm-gold/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-warm-black">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-warm-black/80 text-sm md:text-base">
                    &quot;{testimonial.quote}&quot;
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-warm-cream/60 border-warm-gold/30 backdrop-blur-sm">
            <CardContent className="text-center py-8">
              <p className="text-warm-black/80">No testimonials available yet. Be the first to share your experience!</p>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 px-4 md:px-8 text-center bg-gradient-to-b from-warm-black/98 to-warm-black">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8 text-warm-gold">Ready to Create Your Perfect Event?</h2>
        <Link href="/contact">
          <Button className="bg-warm-gold hover:bg-warm-gold/90 text-warm-black w-full md:w-auto">
            Contact Us Today
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
