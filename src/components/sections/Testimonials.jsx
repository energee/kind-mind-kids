// Testimonials: the first review is set as a large pull quote, the rest smaller below it.
// Placeholder reviews (see disclaimer); replace with real reviews when available.
const reviews = [
  {
    text: "The moment we walked through the door, we knew this was special. The warmth and attention every caregiver shows is genuine. Our daughter lights up every morning when we pull into the parking lot.",
    name: 'Sarah M.',
    role: 'Parent of a 3-year-old',
  },
  {
    text: "As first-time parents, leaving our 8-week-old was terrifying. The infant team made us feel completely at ease. They truly partner with you and treat your baby like their own. We couldn't ask for more.",
    name: 'James R.',
    role: 'Parent of an infant',
  },
  {
    text: "The Pre-K program prepared our son beyond what we imagined. He entered kindergarten reading, counting confidently, and most importantly, loving to learn. The enrichment activities are incredible bonuses.",
    name: 'Amanda L.',
    role: 'Parent of a Pre-K graduate',
  },
]

export default function Testimonials() {
  const [featured, ...rest] = reviews

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.25rem)] font-semibold leading-tight mb-12">
          What families say
        </h2>

        <figure className="mb-16">
          <blockquote className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-snug">
            &ldquo;{featured.text}&rdquo;
          </blockquote>
          <figcaption className="mt-6">
            <span className="block font-semibold">{featured.name}</span>
            <span className="text-sm text-muted-foreground">{featured.role}</span>
          </figcaption>
        </figure>

        <div className="grid sm:grid-cols-2 gap-10 lg:gap-16">
          {rest.map((r) => (
            <figure key={r.name}>
              <blockquote className="text-lg leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption className="mt-4">
                <span className="block font-semibold text-sm">{r.name}</span>
                <span className="text-sm text-muted-foreground">{r.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Testimonials are representative of parent experiences. Names changed for privacy.
        </p>
      </div>
    </section>
  )
}
