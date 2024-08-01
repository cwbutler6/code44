import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-12 text-center font-serif">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-700 mb-16 text-center max-w-3xl mx-auto">
          Have questions about Code 44? We&apos;re here to help. Reach out to our team for general inquiries, 
          support, or to learn more about our services.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-luxe">
            <h2 className="text-2xl font-bold text-primary mb-6 font-serif">Send Us a Message</h2>
            <form name="contact" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50"></textarea>
              </div>
              <Button type="submit" className="w-full bg-secondary text-white hover:bg-accent hover:text-primary transition-colors duration-300">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 font-serif">Contact Information</h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-700">
                  <MapPin className="mr-2 text-secondary" /> 123 Tech Avenue, College Park, GA 30337
                </p>
                <p className="flex items-center text-gray-700">
                  <Phone className="mr-2 text-secondary" /> (404) 123-4567
                </p>
                <p className="flex items-center text-gray-700">
                  <Mail className="mr-2 text-secondary" /> info@code44.com
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 font-serif">FAQs</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-secondary">What types of events can I host at Code 44?</h3>
                  <p className="text-gray-700">Code 44 is versatile and can accommodate a wide range of events, from tech conferences and corporate meetings to social gatherings and weddings.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Do you offer catering services?</h3>
                  <p className="text-gray-700">Yes, we partner with several premier catering services. You can choose from our list of preferred vendors or bring your own with approval.</p>
                </div>
                {/* Add more FAQs as needed */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-6 font-serif text-center">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            {/* Replace with your actual map embed code */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13259.52530319182!2d-84.45798237512512!3d33.64054870546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4c13b1e08eec9%3A0xfd8ffe0154ac55eb!2sCollege%20Park%2C%20GA!5e0!3m2!1sen!2sus!4v1628699483031!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}