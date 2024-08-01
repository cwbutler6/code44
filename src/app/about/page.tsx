import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-12 text-center font-serif">
          About Code 44
        </h1>
        <p className="text-xl text-gray-700 mb-16 text-center max-w-3xl mx-auto">
          Where innovation meets elegance. Code 44 is College Park&apos;s premier event center, 
          designed to inspire creativity and foster unforgettable experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary font-serif">Our Story</h2>
            <p className="text-lg text-gray-700">
              Founded in 2020, Code 44 was born from a vision to create a space where technology 
              and luxury seamlessly intertwine. Our state-of-the-art facility is more than just an 
              event space; it&apos;s a canvas for innovation and a stage for groundbreaking ideas.
            </p>
            <p className="text-lg text-gray-700">
              Located in the heart of College Park, GA, we&apos;ve quickly become the go-to destination 
              for tech conferences, corporate galas, and high-profile social events.
            </p>
          </div>
          <div className="relative h-96 md:h-[500px]">
            <Image
              src="/images/event-center.png"
              alt="Code 44 Exterior"
              fill
              className="object-cover rounded-lg shadow-luxe"
            />
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg shadow-luxe mb-24">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center font-serif">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cutting-Edge Technology", description: "From holographic displays to AI-assisted event planning, we're at the forefront of event technology." },
              { title: "Unparalleled Flexibility", description: "Our spaces adapt to your vision, whether you're hosting an intimate workshop or a large-scale conference." },
              { title: "Exceptional Service", description: "Our dedicated team of event professionals ensures every detail is perfect, from planning to execution." }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Experience Code 44</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Ready to elevate your next event? Discover the Code 44 difference for yourself.
          </p>
          <Button className="bg-secondary text-white hover:bg-accent hover:text-primary transition-colors duration-300 text-lg px-8 py-3">
            Schedule a Tour
          </Button>
        </div>
      </div>
    </div>
  )
}