import { EventPackage, GalleryItem, Testimonial } from "@/payload-types";
import { headers } from "next/headers";

function getOrigin() {
  const headerList = headers();
  const protocol = headerList.get("x-forwarded-proto");
  const host= headerList.get("host");
  const origin = `${protocol}://${host}`;
  return origin;
}

export async function fetchHomePageData() {
  const origin = getOrigin();

  try {
    const [eventPackagesRes, testimonialsRes] = await Promise.all([
      fetch(`${origin}/api/event-packages`),
      fetch(`${origin}/api/testimonials`)
    ])

    if (!eventPackagesRes.ok || !testimonialsRes.ok) {
      throw new Error('Failed to fetch data from CMS')
    }

    const eventPackages = await eventPackagesRes.json()
    const testimonials = await testimonialsRes.json()

    return {
      eventPackages: eventPackages.docs as EventPackage[],
      testimonials: testimonials.docs as Testimonial[],
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { error: 'Failed to load page data' }
  }
}

export async function getGalleryData(): Promise<{ 
  galleryItems: GalleryItem[] | null; 
  error?: string 
}> {
  try {
    const origin = getOrigin();
    const response = await fetch(`${origin}/api/gallery-items`)

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
