import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Enrichment', href: '#enrichment' },
    { label: 'Families', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-cream/92 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.06)] py-3'
            : 'py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2.5 font-display text-xl font-semibold"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <svg viewBox="0 0 42 42" fill="none" className="w-10 h-10">
              <circle cx="21" cy="21" r="20" fill="#8B9E7E" opacity="0.15" />
              <circle cx="21" cy="21" r="14" fill="#8B9E7E" opacity="0.25" />
              <path
                d="M21 10C18 10 14 12 14 17C14 20 16 21 18 21C16 22 15 24 15 27C15 30 17 32 21 32C25 32 27 30 27 27C27 24 26 22 24 21C26 21 28 20 28 17C28 12 24 10 21 10Z"
                fill="#8B9E7E"
              />
              <circle cx="18.5" cy="17" r="1.5" fill="white" />
              <circle cx="23.5" cy="17" r="1.5" fill="white" />
              <path
                d="M19 20.5C19 20.5 20 21.5 21 21.5C22 21.5 23 20.5 23 20.5"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
            Kind Mind Kids
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className="text-sm font-medium text-muted-foreground hover:text-terracotta transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-terracotta after:rounded-full after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="rounded-full bg-terracotta hover:bg-terracotta-dark text-white">
              <a href="tel:3028931800">
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Schedule a Tour
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-cream z-[999] flex flex-col items-center justify-center gap-8 animate-in fade-in duration-200">
          <button
            className="absolute top-5 right-5 p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.href)
              }}
              className="font-display text-2xl font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="rounded-full bg-terracotta hover:bg-terracotta-dark text-white mt-4">
            <a href="tel:3028931800">Schedule a Tour</a>
          </Button>
        </div>
      )}
    </>
  )
}
