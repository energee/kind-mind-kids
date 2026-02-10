import { useReveal } from '@/hooks/useReveal'
import { Library, TreePine, Lock, Sparkles, Home, Palette } from 'lucide-react'

const features = [
  { icon: Library, title: 'Age-Specific Classrooms', desc: 'Five dedicated rooms designed for each developmental stage' },
  { icon: TreePine, title: 'Outdoor Play Area', desc: 'Safe, enclosed green space for active play and nature exploration' },
  { icon: Lock, title: 'Secure Entry', desc: 'Controlled access and constant supervision for total peace of mind' },
  { icon: Sparkles, title: 'Clean & Sanitized Daily', desc: 'Rigorous hygiene protocols throughout every space' },
]

export default function Facilities() {
  const ref = useReveal()

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-sage mb-3">Our Space</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-5">
            A warm, inspiring environment designed for little explorers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Located at the beautiful Immanuel Church Highlands, our thoughtfully designed spaces inspire creativity, exploration, and a sense of belonging.
          </p>

          <div className="flex flex-col gap-3">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="flex items-center gap-4 p-4 bg-warm-white rounded-xl hover:bg-sage/5 hover:translate-x-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-sage" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{f.title}</p>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="reveal">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 aspect-square">
            <div className="row-span-2 rounded-2xl bg-gradient-to-br from-sage-light to-sage flex items-center justify-center hover:scale-[1.02] transition-transform">
              <Home className="w-20 h-20 text-white" strokeWidth={1.2} />
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-cream-dark to-[#E8DDD0] flex items-center justify-center hover:scale-[1.03] transition-transform">
              <TreePine className="w-14 h-14 text-[#8A7A6A]" strokeWidth={1.3} />
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-terracotta-light to-terracotta flex items-center justify-center hover:scale-[1.03] transition-transform">
              <Palette className="w-14 h-14 text-white" strokeWidth={1.3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
