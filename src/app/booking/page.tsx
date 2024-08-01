import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Booking() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-12 text-center font-serif">
          Book Your Exceptional Event
        </h1>
        <p className="text-xl text-gray-700 mb-16 text-center max-w-3xl mx-auto">
          Transform your vision into reality at Code 44. Our spaces are designed to inspire and impress, 
          providing the perfect backdrop for your next extraordinary event.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary font-serif">Our Spaces</h2>
            <div className="space-y-4">
              {[
                { name: "Grand Ballroom", capacity: "Up to 500 guests" },
                { name: "Tech Innovation Hub", capacity: "Up to 200 guests" },
                { name: "Executive Boardroom", capacity: "Up to 50 guests" },
                { name: "Rooftop Terrace", capacity: "Up to 150 guests" }
              ].map((space, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-luxe">
                  <h3 className="text-xl font-bold text-secondary mb-2">{space.name}</h3>
                  <p className="text-gray-600">{space.capacity}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 md:h-[600px]">
            <Image
              src="/images/ballroom.webp"
              alt="Code 44 Grand Ballroom"
              fill
              className="object-cover rounded-lg shadow-luxe"
            />
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg shadow-luxe text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Ready to Begin?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Our event specialists are here to help you create an unforgettable experience. 
            Contact us to start planning your event or to schedule a personal tour.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-secondary text-white hover:bg-accent hover:text-primary transition-colors duration-300 text-lg px-8 py-3">
              Request a Proposal
            </Button>
            <Button className="bg-primary text-white hover:bg-accent hover:text-primary transition-colors duration-300 text-lg px-8 py-3">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}