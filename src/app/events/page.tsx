import Image from 'next/image'
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Tech Innovators Gala",
    date: "August 15, 2024",
    time: "7:00 PM",
    description: "An elegant evening celebrating technological advancements and innovators in our community.",
    image: "/images/tech-gala.png"
  },
  {
    title: "Executive Networking Soirée",
    date: "September 22, 2024",
    time: "6:30 PM",
    description: "Exclusive networking event for C-suite executives and industry leaders.",
    image: "/images/network-event.png"
  },
  {
    title: "Annual Charity Masquerade Ball",
    date: "October 31, 2024",
    time: "8:00 PM",
    description: "A night of mystery and philanthropy. All proceeds go to local STEM education initiatives.",
    image: "/images/masquerade.webp"
  }
]

export default function Events() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-12 text-center font-serif">
          Upcoming Events at Code 44
        </h1>
        <p className="text-xl text-gray-700 mb-16 text-center max-w-3xl mx-auto">
          Experience sophistication and innovation at our carefully curated events. 
          Join us for nights of networking, celebration, and groundbreaking ideas.
        </p>
        
        <div className="space-y-24">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-luxe rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-4 font-serif">{event.title}</h2>
                    <p className="text-lg text-gray-600 mb-4">{event.date} at {event.time}</p>
                    <p className="text-gray-700 mb-6">{event.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button className="bg-secondary text-white hover:bg-accent hover:text-primary transition-colors duration-300">
                      Reserve Your Spot
                    </Button>
                    <a href="#" className="text-primary hover:text-secondary transition-colors duration-300">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Create Your Own Extraordinary Event</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Envision an event that&apos;s uniquely yours. At Code 44, we turn your vision into reality.
          </p>
          <Button className="bg-accent text-primary hover:bg-secondary hover:text-white transition-colors duration-300 text-lg px-8 py-3">
            Start Planning Your Event
          </Button>
        </div>
      </div>
    </div>
  )
}