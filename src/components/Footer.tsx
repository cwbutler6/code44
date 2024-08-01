import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-secondary font-serif">Code 44</h2>
            <p className="text-gray-400">Elevating events in College Park, GA</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {['Home', 'Events', 'Booking', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`} 
                  className="block text-gray-400 hover:text-secondary transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>123 Tech Avenue</p>
              <p>College Park, GA 30337</p>
              <p className="mt-2">Phone: (404) 123-4567</p>
              <p>Email: info@code44.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest events and offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button 
                type="submit" 
                className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-accent hover:text-primary transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Code 44. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer