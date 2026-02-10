import { useReveal } from '@/hooks/useReveal'
import { Heart, Users, BookOpen, ShieldCheck, Library, Palette, Music, Smile } from 'lucide-react'

const values = [
  { icon: Heart, title: 'Love & Laughter', desc: 'Nurturing through joy' },
  { icon: Users, title: 'Family Partnership', desc: 'Working together' },
  { icon: BookOpen, title: 'Whole-Child Learning', desc: 'Mind, body, spirit' },
  { icon: ShieldCheck, title: 'Safe Environment', desc: 'Security first, always' },
]

const tiles = [
  { icon: Library, gradient: 'from-[#E8DDD0] to-[#D9CFC0]', iconColor: 'text-[#8A7A6A]' },
  { icon: Palette, gradient: 'from-sage-light to-sage', shift: 'translate-y-6', iconColor: 'text-white' },
  { icon: Music, gradient: 'from-terracotta-light to-terracotta', shift: '-translate-y-6', iconColor: 'text-white' },
  { icon: Smile, gradient: 'from-gold-light to-gold', iconColor: 'text-white' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Visual grid */}
        <div className="reveal grid grid-cols-2 gap-3 md:order-first order-last">
          {tiles.map((tile, i) => {
            const Icon = tile.icon
            return (
              <div
                key={i}
                className={`bg-gradient-to-br ${tile.gradient} rounded-2xl aspect-square flex items-center justify-center hover:scale-[1.03] transition-transform ${tile.shift || ''}`}
              >
                <Icon className={`w-16 h-16 ${tile.iconColor}`} strokeWidth={1.3} />
              </div>
            )
          })}
        </div>

        {/* Content */}
        <div className="reveal">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-sage mb-3">Our Philosophy</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-5">
            We celebrate the inner qualities of children that are meant to shine brightly
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Since 2010, Kind Mind Kids has been more than a daycare — we're a family. Our intimate setting of just 38 children means your child receives truly personalized attention in a safe, supportive, and engaging environment where kindness is at the heart of everything we do.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{title}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
