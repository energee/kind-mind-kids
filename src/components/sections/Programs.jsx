// Programs: an age picker built from toy blocks (the logo's design language). Each block
// is a tab; all five panels are rendered (inactive ones `hidden`) so the prerendered HTML
// keeps every description for search engines. Footer links (#infant, #pre-k, ...) select
// the matching tab via the URL hash.
import { useEffect, useState } from 'react'

const programs = [
  {
    image: '/images/kindmind/infant-ball-play.webp',
    alt: 'Babies exploring colorful balls together during outdoor sensory play',
    imageWidth: 720,
    imageHeight: 720,
    caption: 'Colorful discoveries and time together.',
    age: '6 weeks and up',
    id: 'infant',
    short: 'Infants',
    title: 'Infant Program',
    desc: 'We follow your baby\'s schedule for eating and sleeping, not ours. The infant room is stocked with books and hands-on toys, and the day is full of stories, songs, and simple games.',
    block: 'bg-blue',
    ink: 'text-blue-dark',
  },
  {
    image: '/images/kindmind/one-year-sensory.webp',
    alt: 'A young child exploring toy dinosaurs in an indoor sensory table',
    imageWidth: 1280,
    imageHeight: 1280,
    caption: 'Hands-on discoveries at the sensory table.',
    age: '12 to 23 months',
    id: 'one-year-olds',
    short: 'Ones',
    title: 'One-Year-Olds',
    desc: 'Walking, first words, and a lot of exploring. We focus on language, movement, and getting along with others, with sensory play and plenty of room to roam.',
    block: 'bg-orange-light',
    ink: 'text-orange-dark',
  },
  {
    image: '/images/kindmind/toddler-sensory.webp',
    alt: 'Children exploring cups, colorful pom-poms, and tubes at a classroom sensory table',
    imageWidth: 1280,
    imageHeight: 1280,
    caption: 'Exploring textures and playing alongside friends.',
    age: '2 years',
    id: 'toddlers',
    short: 'Twos',
    title: 'Toddler Program',
    desc: 'Two-year-olds want to do it themselves, so we let them. Children practice hand-washing, sharing, and using their words, with art and play throughout the day.',
    block: 'bg-yellow',
    ink: 'text-yellow-dark',
  },
  {
    image: '/images/kindmind/preschool-outdoor-play.webp',
    alt: 'A child in a red raincoat jumping during outdoor group play',
    imageWidth: 720,
    imageHeight: 720,
    caption: 'Room to move, laugh, and play together.',
    age: '3 years',
    id: 'preschool',
    short: 'Threes',
    title: 'Preschool 3\'s',
    desc: 'Pretend play, music, art, early reading, math, and science. Three-year-olds learn to ask questions and figure out the answers.',
    block: 'bg-green',
    ink: 'text-green-dark',
  },
  {
    image: '/images/kindmind/pre-k-discovery.webp',
    alt: 'A child holding an activity sheet with pictures of community helpers',
    imageWidth: 1280,
    imageHeight: 1280,
    caption: 'New ideas and discoveries, one activity at a time.',
    age: '4 to 5 years',
    id: 'pre-k',
    short: 'Pre-K',
    title: 'Pre-Kindergarten',
    desc: 'A full year of getting ready for kindergarten. Children work on phonics, math, science, geography, and world cultures, plus the social skills they need on day one.',
    block: 'bg-orange',
    ink: 'text-orange-dark',
  },
]

export default function Programs() {
  const [active, setActive] = useState(0)

  // Footer links point at #<program id>; select that tab and bring the section into view
  useEffect(() => {
    const selectFromHash = () => {
      const i = programs.findIndex((p) => `#${p.id}` === window.location.hash)
      if (i < 0) return
      setActive(i)
      document.getElementById('programs')?.scrollIntoView()
    }
    selectFromHash()
    window.addEventListener('hashchange', selectFromHash)
    return () => window.removeEventListener('hashchange', selectFromHash)
  }, [])

  // Arrow keys move between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    if (!step) return
    const next = (active + step + programs.length) % programs.length
    setActive(next)
    document.getElementById(`tab-${programs[next].id}`)?.focus()
  }

  return (
    <section id="programs" className="py-20 lg:py-28 bg-sky scroll-mt-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.25rem)] font-semibold leading-tight mb-3">
          A classroom for every age
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-[48ch]">
          Five classrooms, each set up for what children that age are ready to learn. Pick an age to explore the program.
        </p>

        <div role="tablist" aria-label="Age groups" onKeyDown={onKeyDown} className="grid grid-cols-5 gap-2 sm:gap-4 max-w-[720px] mb-10">
          {programs.map((p, i) => {
            const selected = i === active
            return (
              <button
                key={p.id}
                id={`tab-${p.id}`}
                role="tab"
                aria-selected={selected}
                aria-controls={p.id}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-dark"
              >
                <span className={`block h-14 sm:h-16 p-2 rounded-lg ${p.block} transition-all duration-200 ${selected ? '-translate-y-1.5 shadow-[inset_0_-6px_0_rgba(0,0,0,0.22)]' : 'hover:-translate-y-0.5'}`}>
                  <span className={`h-full bg-white rounded-sm flex items-center justify-center font-display font-bold text-sm sm:text-lg ${selected ? p.ink : 'text-foreground/70'}`}>
                    {p.short}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {programs.map((p, i) => (
          <div
            key={p.id}
            id={p.id}
            role="tabpanel"
            aria-labelledby={`tab-${p.id}`}
            hidden={i !== active}
            className="grid md:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-center"
          >
            <figure>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  width={p.imageWidth}
                  height={p.imageHeight}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-muted-foreground">
                {p.caption}
              </figcaption>
            </figure>
            <div>
              <p className={`font-semibold mb-2 ${p.ink}`}>{p.age}</p>
              <h3 className="font-display text-3xl lg:text-4xl font-semibold mb-4">{p.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
