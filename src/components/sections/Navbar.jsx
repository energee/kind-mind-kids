import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      setPastHero(window.scrollY > 600)
    }
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
            ? 'bg-white/92 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.06)] py-3'
            : 'py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2.5"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <img src="/brand/kmk-mark.svg" alt="" width="1010" height="833" className="h-11 w-auto" />
            <img src="/brand/kmk-wordmark.svg" alt="Kind Mind Kids" width="1752" height="197" className="h-[22px] w-auto" />
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
                className="text-sm font-medium text-muted-foreground hover:text-orange-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-orange after:rounded-full after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="rounded-lg bg-orange-dark hover:brightness-110 text-white">
              <a href="tel:3028931800">
                Call (302) 893-1800
              </a>
            </Button>
          </div>

          {/* Mobile toggle: two bars that rotate into an X. It stays above the open
              menu (nav z-50, menu z-[45]) so it doubles as the close button. */}
          <button
            className="md:hidden relative w-10 h-10 -mr-2"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`absolute left-2 right-2 top-1/2 -mt-px h-0.5 rounded-full bg-foreground transition-all duration-300 ease-out ${mobileOpen ? 'rotate-45' : '-translate-y-[4px]'}`} />
            <span className={`absolute left-2 right-2 top-1/2 -mt-px h-0.5 rounded-full bg-foreground transition-all duration-300 ease-out ${mobileOpen ? '-rotate-45' : 'translate-y-[4px]'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-[45] flex flex-col items-center justify-center gap-8 animate-in fade-in duration-200">
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
          <Button asChild className="rounded-lg bg-orange-dark hover:brightness-110 text-white mt-4">
            <a href="tel:3028931800">Call to Schedule a Tour</a>
          </Button>
        </div>
      )}

      {/* Mobile call bar: appears once the hero's tour button scrolls away */}
      <a
        href="tel:3028931800"
        aria-hidden={!pastHero}
        tabIndex={pastHero ? 0 : -1}
        className={`md:hidden fixed bottom-4 inset-x-4 z-40 flex items-center justify-center rounded-lg bg-orange-dark text-white font-semibold py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 ${
          pastHero ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        Call to Schedule a Tour
      </a>
    </>
  )
}
