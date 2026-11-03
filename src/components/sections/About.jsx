
const values = [
  { title: 'Love & Laughter', desc: 'Happy kids learn more' },
  { title: 'Family Partnership', desc: 'We work with you, not around you' },
  { title: 'Whole-Child Learning', desc: 'Social, emotional, and academic' },
  { title: 'Safe Environment', desc: 'Secure entry, close supervision' },
]


export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="md:order-first order-last flex justify-center">
          <img
            src="/brand/kmk-logo-slogan.svg"
            alt="Kind Mind Kids logo: two children reaching for stars above building blocks spelling KMK, with the slogan Growing Kindness, Inspiring Minds"
            width="1752"
            height="1198"
            loading="lazy"
            decoding="async"
            className="w-full max-w-[500px] h-auto"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-5">
            Small enough to know every child
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Kind Mind Kids opened in 2010. We cap enrollment at 38 children, so our teachers get to know each child and each family well. We teach kindness the same way we teach letters and numbers: every day, on purpose.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {values.map(({ title, desc }) => (
              <div key={title}>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
