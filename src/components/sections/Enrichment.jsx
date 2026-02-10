import { useReveal } from '@/hooks/useReveal'
import { Languages, Waypoints, Dribbble, CookingPot, Music } from 'lucide-react'

const activities = [
  { icon: Languages, title: 'Spanish', desc: 'Early language immersion builds cognitive flexibility and cultural awareness.' },
  { icon: Waypoints, title: 'Yoga', desc: 'Mindfulness and movement develop body awareness and emotional regulation.' },
  { icon: Dribbble, title: 'Soccer', desc: 'Team play and physical activity build coordination, confidence, and sportsmanship.' },
  { icon: CookingPot, title: 'Cooking', desc: 'Hands-on kitchen experiences teach math, science, nutrition, and cooperation.' },
  { icon: Music, title: 'Music', desc: 'Rhythm, melody, and expression nurture creativity and listening skills.' },
]

export default function Enrichment() {
  const ref = useReveal()

  return (
    <section id="enrichment" className="py-20 lg:py-28 bg-sage-dark text-white relative overflow-hidden" ref={ref}>
      <div className="absolute -top-1/2 -right-[20%] w-[60%] h-[200%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-[600px] mx-auto mb-14 reveal">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-sage-light mb-3">Beyond the Classroom</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-3">
            Enrichment activities that spark joy and curiosity
          </h2>
          <p className="text-lg text-white/60">
            Our diverse enrichment programs nurture well-rounded development through creative expression, movement, and cultural exploration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 stagger">
          {activities.map((a) => {
            const Icon = a.icon
            return (
              <div
                key={a.title}
                className="reveal group bg-white/8 border border-white/10 backdrop-blur-sm rounded-3xl p-6 text-center hover:bg-white/14 hover:-translate-y-1.5 hover:border-white/20 transition-all duration-400"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-400">
                  <Icon className="w-8 h-8 text-white/80" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-base font-medium mb-2">{a.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{a.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
