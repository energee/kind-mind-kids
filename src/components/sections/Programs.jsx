import { useReveal } from '@/hooks/useReveal'
import { Card, CardContent } from '@/components/ui/card'
import { Baby, Footprints, Palette, BookOpen, GraduationCap } from 'lucide-react'

const programs = [
  {
    icon: Baby,
    age: '6 Weeks +',
    title: 'Infant Program',
    desc: 'Our caregivers work closely with families to honor each baby\'s unique schedule. The infant area is filled with carefully chosen manipulatives and books, nurturing first learning skills through activities, stories, and song.',
    color: 'coral',
  },
  {
    icon: Footprints,
    age: '12 – 23 Months',
    title: 'One-Year-Olds',
    desc: 'A vibrant year of discovery. We emphasize social growth, language development, and motor skills through guided exploration, sensory play, and plenty of hands-on adventures.',
    color: 'terracotta-light',
  },
  {
    icon: Palette,
    age: '2 Years',
    title: 'Toddler Program',
    desc: 'Toddlers blossom as they practice daily life skills like hand-washing, sharing, and self-expression. Creative play and structured activities build confidence and independence.',
    color: 'gold',
  },
  {
    icon: BookOpen,
    age: '3 Years',
    title: 'Preschool 3\'s',
    desc: 'Building a foundation for life-long learning through imaginative play, music, art, reading, math, and science. Children develop critical thinking and a genuine love of discovery.',
    color: 'sage',
  },
  {
    icon: GraduationCap,
    age: '4 – 5 Years',
    title: 'Pre-Kindergarten',
    desc: 'Comprehensive kindergarten preparation focusing on social, motor, and cognitive skills. Mathematics, phonics, science, geography, and world cultures prepare children for academic success.',
    color: 'terracotta',
  },
]

const colorMap = {
  coral: { bar: 'bg-coral', badge: 'bg-coral/10 text-terracotta-dark', icon: 'bg-coral/15', iconColor: 'text-coral' },
  'terracotta-light': { bar: 'bg-terracotta-light', badge: 'bg-terracotta/10 text-terracotta-dark', icon: 'bg-terracotta-light/15', iconColor: 'text-terracotta-light' },
  gold: { bar: 'bg-gold', badge: 'bg-gold/10 text-[#8A7030]', icon: 'bg-gold/12', iconColor: 'text-gold' },
  sage: { bar: 'bg-sage', badge: 'bg-sage/10 text-sage-dark', icon: 'bg-sage/12', iconColor: 'text-sage' },
  terracotta: { bar: 'bg-terracotta', badge: 'bg-terracotta/10 text-terracotta-dark', icon: 'bg-terracotta/12', iconColor: 'text-terracotta' },
}

export default function Programs() {
  const ref = useReveal()

  return (
    <section id="programs" className="py-20 lg:py-28 bg-warm-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[650px] mx-auto mb-14 reveal">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-sage mb-3">Our Programs</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-3">
            Nurturing every stage of early development
          </h2>
          <p className="text-lg text-muted-foreground">
            Five thoughtfully designed classrooms, each tailored to your child's unique developmental stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 stagger">
          {programs.map((p) => {
            const colors = colorMap[p.color]
            const Icon = p.icon
            return (
              <Card
                key={p.title}
                className="reveal group border border-black/[0.04] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-400 overflow-hidden relative py-0"
              >
                <div className={`h-1 group-hover:h-1.5 transition-all ${colors.bar} rounded-t-lg`} />
                <CardContent className="pt-6 pb-6 px-5">
                  <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${colors.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <span className={`inline-block text-[0.68rem] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3 ${colors.badge}`}>
                    {p.age}
                  </span>
                  <h3 className="font-display text-lg font-medium mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
