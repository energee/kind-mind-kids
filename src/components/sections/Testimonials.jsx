import { useReveal } from '@/hooks/useReveal'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const reviews = [
  {
    text: "The moment we walked through the door, we knew this was special. The warmth and attention every caregiver shows is genuine. Our daughter lights up every morning when we pull into the parking lot.",
    name: 'Sarah M.',
    role: 'Parent of a 3-year-old',
    initials: 'SM',
    bg: 'bg-sage',
  },
  {
    text: "As first-time parents, leaving our 8-week-old was terrifying. The infant team made us feel completely at ease. They truly partner with you and treat your baby like their own. We couldn't ask for more.",
    name: 'James R.',
    role: 'Parent of an infant',
    initials: 'JR',
    bg: 'bg-terracotta',
  },
  {
    text: "The Pre-K program prepared our son beyond what we imagined. He entered kindergarten reading, counting confidently, and — most importantly — with a love of learning. The enrichment activities are incredible bonuses.",
    name: 'Amanda L.',
    role: 'Parent of a Pre-K graduate',
    initials: 'AL',
    bg: 'bg-gold',
  },
]

export default function Testimonials() {
  const ref = useReveal()

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-br from-cream to-cream-dark" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[600px] mx-auto mb-14 reveal">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-sage mb-3">Parent Stories</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-3">
            What our families are saying
          </h2>
          <p className="text-lg text-muted-foreground">
            The greatest endorsement comes from the families who trust us with their most precious gift.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[500px] md:max-w-none mx-auto stagger">
          {reviews.map((r) => (
            <Card key={r.name} className="reveal relative pt-8 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-400">
              <div className="absolute -top-3 left-6 w-10 h-10 bg-terracotta rounded-xl flex items-center justify-center text-white font-display text-xl font-bold leading-none">
                &ldquo;
              </div>
              <CardContent className="pt-2">
                <div className="flex text-gold mb-3 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-5">{r.text}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${r.bg} text-white flex items-center justify-center text-sm font-semibold`}>
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="reveal text-center mt-8 text-sm text-muted-foreground italic">
          * Testimonials are representative of parent experiences. Names changed for privacy.
        </p>
      </div>
    </section>
  )
}
