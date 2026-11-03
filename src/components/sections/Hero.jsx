import { Button } from '@/components/ui/button'
import Arc from '@/components/brand/Arc'

export default function Hero() {
  return (
    <section className="bg-sky pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-[560px]">
          <h1 className="font-display text-[clamp(3rem,6.5vw,5.5rem)] font-semibold leading-[1.02] tracking-tight mb-6">
            Growing <em className="not-italic text-orange">Kindness</em>, Inspiring Minds
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-9 max-w-[30ch]">
            A small daycare and preschool in Wilmington, DE, for children from 6 weeks to 5 years old.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-lg bg-orange-dark hover:brightness-110 text-white transition-all">
              <a href="tel:3028931800">Call to Tour: (302) 893-1800</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent border-orange-dark/40 text-orange-dark hover:bg-orange-dark hover:text-white hover:border-orange-dark transition-all">
              <a href="#programs">Explore Programs</a>
            </Button>
          </div>
        </div>

        {/* The photo stands on the logo's yellow arc, the way the KMK blocks do */}
        <div className="relative w-full max-w-[460px] mx-auto">
          <div className="relative z-10 aspect-[3/2] md:aspect-[1199/1280] rounded-lg overflow-hidden bg-blue-dark">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/images/kindmind/garden-with-teacher.webp"
                width="1199"
                height="1280"
              />
              <img
                src="/images/kindmind/garden-with-teacher-hero.webp"
                alt="An educator and Kind Mind Kids children examining a freshly harvested carrot"
                width="1536"
                height="1024"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          {/* Behind the photo, like the band behind the logo's blocks: at the photo's corners
              the band is centered on its bottom edge, so only the two ends show */}
          <Arc className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-[110%] md:w-[135%] h-11" />
        </div>
      </div>
    </section>
  )
}
