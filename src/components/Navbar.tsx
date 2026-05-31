import { useState, useEffect } from 'react'
import { Menu, X, PhoneCall } from 'lucide-react'

interface NavbarProps {
  onReserveClick: () => void
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Sanctuary', href: '#about' },
    { label: 'Suites', href: '#accommodation' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Gallery', href: '#gallery' }
  ]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'py-4 bg-white/80 backdrop-blur-xl shadow-md border-b border-outline-variant/30'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-20 max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#"
            className={`font-headline-lg text-2xl md:text-3xl tracking-widest transition-colors duration-300 font-bold ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            THEHARAV
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-label-md uppercase tracking-widest text-xs hover:text-primary transition-all duration-300 relative group ${
                  isScrolled ? 'text-on-surface-variant' : 'text-white/95'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={onReserveClick}
              className={`font-label-md uppercase tracking-widest text-xs px-8 py-3.5 border transition-all duration-300 active:scale-95 ${
                isScrolled
                  ? 'bg-primary text-white border-primary hover:bg-transparent hover:text-primary'
                  : 'bg-white text-primary border-white hover:bg-transparent hover:text-white'
              }`}
            >
              Reserve Now
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden p-1 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Custom Sheet) */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-surface-bright p-8 shadow-2xl flex flex-col justify-between transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex justify-between items-center mb-10">
              <span className="font-headline-lg text-primary text-xl tracking-widest font-bold">THEHARAV</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-on-surface-variant hover:text-primary p-1"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-label-md text-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline-variant/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 font-body-md text-xs text-on-surface-variant py-2"
            >
              <PhoneCall size={16} className="text-primary" />
              +91 98765 43210
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                onReserveClick()
              }}
              className="w-full bg-primary text-white font-label-md text-xs uppercase tracking-widest py-4 hover:opacity-90 active:scale-95 transition-all"
            >
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
