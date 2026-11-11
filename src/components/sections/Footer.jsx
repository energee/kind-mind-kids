import { Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white/60 pt-16 pb-24 md:pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-2.5 mb-4">
              <img src="/brand/kmk-mark.svg" alt="" width="1010" height="833" className="h-11 w-auto" />
              <img src="/brand/kmk-wordmark.svg" alt="Kind Mind Kids" width="1752" height="197" className="h-5 w-auto" />
            </a>
            <p className="text-sm leading-relaxed max-w-[300px] mb-5">
              Growing kindness and inspiring minds since 2010. A daycare and preschool in Wilmington, Delaware.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/kindmindkids/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center hover:bg-orange hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display text-base font-medium text-white mb-4">Programs</h3>
            <div className="flex flex-col gap-2">
              {[['Infants', 'infant'], ['Toddler 1', 'toddler-1'], ['Toddler 2', 'toddler-2'], ['Twos', 'twos'], ['Preschool', 'preschool']].map(([p, id]) => (
                <a key={p} href={`#${id}`} className="text-sm hover:text-orange-light transition-colors">{p}</a>
              ))}
            </div>
          </div>

          {/* Enrichment */}
          <div>
            <h3 className="font-display text-base font-medium text-white mb-4">Enrichment</h3>
            <div className="flex flex-col gap-2">
              {['Spanish', 'Yoga', 'Soccer', 'Cooking', 'Music'].map((e) => (
                <a key={e} href={`#${e.toLowerCase()}`} className="text-sm hover:text-orange-light transition-colors">{e}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-medium text-white mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:3028931800" className="text-sm hover:text-orange-light transition-colors">(302) 893-1800</a>
              <a href="mailto:kindmindkids@gmail.com" className="text-sm hover:text-orange-light transition-colors">kindmindkids@gmail.com</a>
              <a href="#contact" className="text-sm hover:text-orange-light transition-colors">2400 W 17th St, Wilmington</a>
              <span className="text-sm">Mon to Fri, 7 AM to 5:30 PM</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-center sm:text-left">
          &copy; 2026 Kind Mind Kids Early Learning Center. All rights reserved. License #1498551
        </p>
      </div>
    </footer>
  )
}
