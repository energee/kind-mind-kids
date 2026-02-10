import { useReveal } from '@/hooks/useReveal'
import { Star, ShieldCheck, Users, CalendarDays, BookOpen, Sprout } from 'lucide-react'

const stats = [
  { icon: Star, stat: '5 Stars', title: 'Top-Rated Center', desc: "Highest quality rating from Delaware's child care rating system.", iconColor: 'text-gold' },
  { icon: ShieldCheck, stat: 'Zero', title: 'Injuries Reported', desc: 'An impeccable safety record that gives parents complete peace of mind.', iconColor: 'text-sage' },
  { icon: Users, stat: '38', title: 'Intimate Capacity', desc: 'Small by design. Every child receives individualized attention and care.', iconColor: 'text-coral' },
  { icon: CalendarDays, stat: '15+ Years', title: 'Serving Wilmington', desc: 'A trusted part of the community since 2010.', iconColor: 'text-terracotta' },
  { icon: BookOpen, stat: '5', title: 'Tailored Programs', desc: 'Age-specific classrooms from infants through Pre-K.', iconColor: 'text-gold' },
  { icon: Sprout, stat: '5', title: 'Enrichment Activities', desc: 'Spanish, yoga, soccer, cooking, and music — included in the curriculum.', iconColor: 'text-sage' },
]

const iconBgs = [
  'bg-gold/12', 'bg-sage/12', 'bg-coral/12',
  'bg-terracotta/12', 'bg-gold/12', 'bg-sage/12',
]

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[600px] mx-auto mb-14 reveal">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-sage mb-3">Why Kind Mind Kids</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-3">
            Trusted by families across Wilmington
          </h2>
          <p className="text-lg text-muted-foreground">
            The numbers speak for themselves — and the smiles on your children's faces say even more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="reveal text-center p-8 rounded-3xl bg-warm-white border border-transparent hover:border-sage/15 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-400"
              >
                <div className={`w-[72px] h-[72px] mx-auto mb-5 rounded-2xl ${iconBgs[i]} flex items-center justify-center`}>
                  <Icon className={`w-9 h-9 ${s.iconColor}`} strokeWidth={1.5} />
                </div>
                <p className="font-display text-3xl font-bold text-terracotta mb-1">{s.stat}</p>
                <h3 className="font-display text-lg font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
