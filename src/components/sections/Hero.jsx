import { Button } from '@/components/ui/button'
import { ArrowRight, Sprout, Star, ShieldCheck, Baby } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream via-cream-dark to-[#E8DDD0] overflow-hidden pt-24">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-blob-1 absolute -top-[10%] -right-[5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[radial-gradient(ellipse_at_30%_40%,rgba(139,158,126,0.15)_0%,rgba(139,158,126,0.05)_60%,transparent_70%)] rounded-[60%_40%_55%_45%/50%_60%_40%_50%]" />
        <div className="animate-blob-2 absolute -bottom-[15%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(ellipse_at_60%_50%,rgba(196,131,106,0.1)_0%,rgba(196,131,106,0.03)_60%,transparent_70%)] rounded-[45%_55%_40%_60%/55%_45%_55%_45%]" />
        <div className="animate-blob-3 absolute top-[20%] left-[30%] w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] bg-[radial-gradient(ellipse_at_50%_50%,rgba(197,165,90,0.08)_0%,transparent_60%)] rounded-[50%_50%_45%_55%/55%_45%_50%_50%]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text */}
        <div className="max-w-[560px]">
          <div className="animate-fade-up-1 inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full mb-6">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold text-sage-dark tracking-wide">Five-Star Rated Center</span>
          </div>

          <h1 className="animate-fade-up-2 font-display text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight mb-5">
            Growing <em className="italic text-terracotta relative">
              Kindness
              <span className="absolute bottom-[0.05em] left-[-2%] right-[-2%] h-[0.12em] bg-terracotta-light/40 rounded" />
            </em>, Inspiring Minds
          </h1>

          <p className="animate-fade-up-3 text-lg text-muted-foreground leading-relaxed mb-8">
            Building kindness and bright minds through love and laughter. A nurturing early learning center in Wilmington, DE for children 6 weeks to 5 years.
          </p>

          <div className="animate-fade-up-4 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-terracotta hover:bg-terracotta-dark text-white shadow-[0_4px_20px_rgba(196,131,106,0.3)] hover:shadow-[0_8px_30px_rgba(196,131,106,0.4)] hover:-translate-y-0.5 transition-all">
              <a href="tel:3028931800">
                Schedule a Tour
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-terracotta-light text-terracotta hover:bg-terracotta hover:text-white hover:border-terracotta transition-all">
              <a href="#programs">Explore Programs</a>
            </Button>
          </div>
        </div>

        {/* Visual */}
        <div className="hidden md:flex items-center justify-center relative animate-fade-up-3">
          <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[40px] overflow-hidden bg-gradient-to-br from-sage-light to-sage shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)] z-[1]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white z-[2]">
              <Sprout className="w-24 h-24 mb-6 opacity-80" strokeWidth={1.2} />
              <p className="font-display text-xl italic opacity-90 leading-relaxed">
                "Where every child's inner light shines bright"
              </p>
            </div>
          </div>

          {/* Floating cards */}
          <div className="animate-float-card absolute bottom-[10%] -left-[10%] bg-white rounded-2xl px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[10px] bg-sage/10 flex items-center justify-center">
                <Baby className="w-5 h-5 text-sage" />
              </div>
              <div>
                <p className="text-sm font-semibold">Ages 6 Weeks – 5 Years</p>
                <p className="text-xs text-muted-foreground">Infant through Pre-K</p>
              </div>
            </div>
          </div>
          <div className="animate-float-card-delayed absolute top-[8%] -right-[5%] bg-white rounded-2xl px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[10px] bg-gold/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold">Zero Injuries Reported</p>
                <p className="text-xs text-muted-foreground">Safety is our priority</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
