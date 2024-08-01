import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-image.jpg"
          alt="Code 44 Luxury Event Space"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 font-serif">
            Welcome to <span className="text-secondary">Code 44</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 font-sans max-w-2xl mx-auto">
            Elevate Your Events in the Heart of College Park, GA
          </p>
          <Button className="bg-secondary text-white hover:bg-accent hover:text-primary transition-colors duration-300 text-lg px-8 py-3">
            Book Your Event
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center font-serif">Why Choose Code 44?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "State-of-the-Art Facilities", icon: "🏢", description: "Cutting-edge technology meets elegant design in our versatile spaces." },
              { title: "Prime Location", icon: "📍", description: "Conveniently located in College Park with easy access and ample parking." },
              { title: "Exceptional Service", icon: "🌟", description: "Our dedicated team ensures your event runs flawlessly from start to finish." }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-luxe text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-secondary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-serif">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { quote: "Code 44 transformed our company retreat into an unforgettable experience. The staff went above and beyond!", author: "Sarah J., Tech Innovations Inc." },
              { quote: "The perfect blend of professionalism and creativity. Our product launch at Code 44 was a resounding success!", author: "Michael L., StartUp Ventures" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="text-secondary font-bold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-serif">Ready to Make Your Event Extraordinary?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            From intimate gatherings to large-scale conferences, Code 44 is your partner in creating memorable events.
          </p>
          <Button className="bg-white text-secondary hover:bg-accent hover:text-primary transition-colors duration-300 text-lg px-8 py-3">
            Schedule a Tour
          </Button>
        </div>
      </section>
    </div>
  )
}