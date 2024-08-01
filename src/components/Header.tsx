'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/booking', label: 'Booking' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isHomePage = pathname === '/'

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isHomePage && !isScrolled 
        ? 'bg-transparent' 
        : 'bg-primary shadow-luxe'
    } py-4`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-secondary font-serif">
          Code 44
        </Link>
        
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white hover:text-secondary transition-colors duration-300 ${
                pathname === item.href ? 'border-b-2 border-secondary' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-secondary text-white hover:bg-accent hover:text-primary transition-colors duration-300">
            Book Now
          </Button>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden bg-primary p-4 absolute top-full left-0 right-0 shadow-luxe">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 text-white hover:text-secondary transition-colors duration-300 ${
                pathname === item.href ? 'text-secondary' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-secondary text-white hover:bg-accent hover:text-primary transition-colors duration-300 w-full mt-4">
            Book Now
          </Button>
        </nav>
      )}
    </header>
  )
}

export default Header