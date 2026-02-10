'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="https://tse3.mm.bing.net/th/id/OIP.lhu9SGD-9FWwgnfqzMSdGwHaGP?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Dalal M&E Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-black tracking-tighter leading-none ${scrolled ? 'text-primary' : 'text-white'}`}>
                DALAL <span className="text-accent">M&E</span>
              </span>
              <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-1 ${scrolled ? 'text-gray-500' : 'text-white/60'}`}>
                Engineering | Electrical Services
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent ${
                  scrolled ? 'text-gray-600' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/quote" 
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                scrolled 
                ? 'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25' 
                : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              Get AI Quote
            </Link>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'top-full opacity-100 translate-y-0 border-t' : 'top-full opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{ maxHeight: isOpen ? '100vh' : '0' }}
        >
          <div className="p-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-lg font-bold text-primary hover:text-accent py-3 border-b border-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="flex items-center justify-center w-full bg-accent text-white font-bold py-4 rounded-xl mt-6 shadow-lg shadow-accent/20"
              onClick={() => setIsOpen(false)}
            >
              Get AI Quote <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
