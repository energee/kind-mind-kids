import { Button } from '@/components/ui/button'
import Arc from '@/components/brand/Arc'

// The two stars above the children's hands in the logo, reused once here
function Star({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`fill-yellow ${className}`}>
      <path d="M12 2.5l2.8 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.4l-6 3.5 1.5-6.8-5.2-4.6 6.9-.7z" />
    </svg>
  )
}

export default function CTA() {
  return (
    <section className="relative bg-orange-dark pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <div className="flex justify-center gap-16 mb-4">
          <Star className="w-6 h-6 -rotate-12" />
          <Star className="w-7 h-7 rotate-12 -mt-2" />
        </div>
        <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-tight text-white mb-4">
          Come see us in person
        </h2>
        <p className="text-lg text-white leading-relaxed mb-8">
          The best way to know if we're the right fit is to visit. Call to schedule a tour. We keep enrollment small, so spots fill up.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-lg bg-white text-orange-dark hover:bg-sky transition-all">
            <a href="tel:3028931800">Call (302) 893-1800</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent border-white/50 text-white hover:bg-white hover:text-orange-dark hover:border-white transition-all">
            <a href="mailto:kindmindkids@gmail.com">Email Us</a>
          </Button>
        </div>
      </div>
      {/* The section ends on the arc with white (the Contact section) below, like the logo */}
      <Arc className="absolute bottom-0 inset-x-0 w-full h-8 sm:h-14" ground="fill-white" />
    </section>
  )
}
