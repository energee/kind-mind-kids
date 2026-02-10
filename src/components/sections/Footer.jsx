import { Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white/60 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 font-display text-xl font-semibold text-white mb-4">
              <svg viewBox="0 0 42 42" fill="none" className="w-10 h-10">
                <circle cx="21" cy="21" r="20" fill="#8B9E7E" opacity="0.3" />
                <circle cx="21" cy="21" r="14" fill="#8B9E7E" opacity="0.4" />
                <path d="M21 10C18 10 14 12 14 17C14 20 16 21 18 21C16 22 15 24 15 27C15 30 17 32 21 32C25 32 27 30 27 27C27 24 26 22 24 21C26 21 28 20 28 17C28 12 24 10 21 10Z" fill="#8B9E7E" />
                <circle cx="18.5" cy="17" r="1.5" fill="white" />
                <circle cx="23.5" cy="17" r="1.5" fill="white" />
                <path d="M19 20.5C19 20.5 20 21.5 21 21.5C22 21.5 23 20.5 23 20.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
              </svg>
              Kind Mind Kids
            </a>
            <p className="text-sm leading-relaxed max-w-[300px] mb-5">
              Growing kindness and inspiring minds since 2010. A Five-Star rated early learning center in Wilmington, Delaware.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/kindmindkids/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center hover:bg-terracotta hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-base font-medium text-white mb-4">Programs</h4>
            <div className="flex flex-col gap-2">
              {['Infant Care', 'One-Year-Olds', 'Toddler Program', "Preschool 3's", 'Pre-Kindergarten'].map((p) => (
                <a key={p} href="#programs" className="text-sm hover:text-terracotta-light transition-colors">{p}</a>
              ))}
            </div>
          </div>

          {/* Enrichment */}
          <div>
            <h4 className="font-display text-base font-medium text-white mb-4">Enrichment</h4>
            <div className="flex flex-col gap-2">
              {['Spanish', 'Yoga', 'Soccer', 'Cooking', 'Music'].map((e) => (
                <a key={e} href="#enrichment" className="text-sm hover:text-terracotta-light transition-colors">{e}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-medium text-white mb-4">Contact</h4>
            <div className="flex flex-col gap-2">
              <a href="tel:3028931800" className="text-sm hover:text-terracotta-light transition-colors">(302) 893-1800</a>
              <a href="mailto:kindmindkids@gmail.com" className="text-sm hover:text-terracotta-light transition-colors">kindmindkids@gmail.com</a>
              <a href="#contact" className="text-sm hover:text-terracotta-light transition-colors">2400 W 17th St, Wilmington</a>
              <span className="text-sm">Mon–Fri, 7AM – 5:30PM</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <span>&copy; 2026 Kind Mind Kids Early Learning Center. All rights reserved. License #1498551</span>
          <span>2400 West 17th Street, Wilmington, DE 19806</span>
        </div>
      </div>
    </footer>
  )
}
