
const features = [
  { title: 'Age-Specific Classrooms', desc: 'Five rooms, each set up for a specific age group' },
  { title: 'Outdoor Play Area', desc: 'A fenced green space for running, climbing, and exploring' },
  { title: 'Secure Entry', desc: 'Controlled building access and constant supervision' },
  { title: 'Clean & Sanitized Daily', desc: 'Every room is cleaned and sanitized each day' },
]

export default function Facilities() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-5">
            A bright, safe place to spend the day
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We're at Immanuel Church Highlands on West 17th Street, with a classroom for each age group and an outdoor play area.
          </p>

          <dl className="flex flex-col gap-5">
            {features.map((f) => (
              <div key={f.title}>
                <dt className="font-semibold">{f.title}</dt>
                <dd className="text-sm text-muted-foreground">{f.desc}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure>
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="/images/kindmind/outdoor-water-play.webp"
              alt="Children exploring outdoor water tables with an adult nearby"
              width="1024"
              height="768"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs text-muted-foreground">
            Outdoor water play with Kind Mind Kids. Visit to explore our classrooms and play space.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
