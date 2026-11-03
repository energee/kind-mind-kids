// Compact trust strip shown directly under the hero: the facts parents weigh first.
// Program and enrichment counts live in their own sections, so they are not repeated here.
const stats = [
  { stat: '5 Stars', title: "Delaware's top quality rating" },
  { stat: 'Since 2010', title: 'Serving Wilmington families' },
]

export default function WhyUs() {
  return (
    <section id="why-us" aria-label="Why families choose Kind Mind Kids" className="bg-white border-b border-border py-8 lg:py-10">
      <div className="max-w-[640px] mx-auto px-6 grid grid-cols-2 divide-x divide-border">
        {stats.map((s) => (
          <div key={s.stat} className="text-center px-2">
            <p className="font-display text-xl sm:text-3xl font-bold text-orange-dark leading-tight">{s.stat}</p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-snug mt-1">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
