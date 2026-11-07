import { useReveal } from '@/hooks/useReveal'

// Each activity is drawn as a toy block like the KMK blocks in the logo.
// `letter` uses the -dark shade so the glyph stays readable on the white inset.
const activities = [
  { title: 'Spanish', desc: 'Young children pick up new languages easily, so we start early.', block: 'bg-orange', letter: 'text-orange-dark', tilt: '-rotate-3' },
  { title: 'Yoga', desc: 'Stretching, breathing, and learning how to calm down.', block: 'bg-green', letter: 'text-green-dark', tilt: 'rotate-2' },
  { title: 'Soccer', desc: 'Running, kicking, taking turns, and being a good teammate.', block: 'bg-yellow', letter: 'text-yellow-dark', tilt: '-rotate-2' },
  { title: 'Cooking', desc: 'Measuring, mixing, and tasting. Math and science they can eat.', block: 'bg-blue-light', letter: 'text-blue-dark', tilt: 'rotate-3' },
  { title: 'Music', desc: 'Singing, rhythm, and instruments that build listening skills.', block: 'bg-orange-light', letter: 'text-orange-dark', tilt: '-rotate-1' },
]

export default function Enrichment() {
  const ref = useReveal()

  return (
    <section id="enrichment" className="py-20 lg:py-28 bg-blue-dark text-white relative overflow-hidden" ref={ref}>
      <div className="absolute -top-1/2 -right-[20%] w-[60%] h-[200%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-3">
            More than the basics
          </h2>
          <p className="text-lg text-white">
            Five enrichment activities give children new ways to move, create, and learn.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 reveal">
          {activities.map((a, i) => (
            <div
              key={a.title}
              id={a.title.toLowerCase()}
              className="scroll-mt-24 last:col-span-2 md:last:col-span-1 text-center px-2"
            >
              <div style={{ '--i': i }} className={`block-drop w-24 h-24 mx-auto mb-5 p-3 rounded-lg ${a.block} ${a.tilt} shadow-[inset_0_-6px_0_rgba(0,0,0,0.15)]`}>
                <div className="w-full h-full bg-white rounded-sm flex items-center justify-center">
                  <span aria-hidden="true" className={`text-5xl font-extrabold leading-none ${a.letter}`}>{a.title[0]}</span>
                </div>
              </div>
              <h3 className="font-display text-lg font-medium mb-2">{a.title}</h3>
              <p className="text-sm text-white leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <figure>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/images/kindmind/farm-corn-discovery.webp"
                alt="Children watching a corn demonstration during a farm visit"
                width="1024"
                height="768"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-white">
              Learning about corn during a farm visit.
            </figcaption>
          </figure>
          <figure>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/images/kindmind/soccer-learning.webp"
                alt="A soccer instructor guiding children through an indoor ball activity"
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-white">
              Practicing movement and taking turns at soccer.
            </figcaption>
          </figure>
          <figure>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/images/kindmind/camping-friends.webp"
                alt="Four children sharing a trail-mix break on a bench during a camping outing"
                width="1024"
                height="768"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-white">
              Sharing a trail-mix break on our camping outing.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
