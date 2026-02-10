import { useReveal } from '@/hooks/useReveal'
import { Button } from '@/components/ui/button'
import { Phone, Mail } from 'lucide-react'

export default function CTA() {
  const ref = useReveal()

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-terracotta to-terracotta-dark relative overflow-hidden" ref={ref}>
      <div className="absolute -top-1/2 -left-[20%] w-[60%] h-[200%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[30%] -right-[10%] w-[40%] h-[150%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[700px] mx-auto px-6 text-center relative z-10 reveal">
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-white mb-4">
          Ready to give your child the Kind Mind experience?
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-8">
          Schedule a tour to see our warm, nurturing environment in person. Limited spots available — we intentionally keep our enrollment small to ensure every child gets the attention they deserve.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-white text-terracotta-dark hover:bg-cream shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all">
            <a href="tel:3028931800">
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 893-1800
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-white/40 text-white hover:bg-white hover:text-terracotta hover:border-white transition-all">
            <a href="mailto:kindmindkids@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
