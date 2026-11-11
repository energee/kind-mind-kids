// FAQ section. The same `faqs` array renders the visible questions and the FAQPage
// JSON-LD, so search and answer engines (Google, ChatGPT, Perplexity) read exactly what
// parents see. Answers use only facts stated elsewhere on the site: keep them in sync.
// Uses native <details> so it works without JavaScript and in the prerendered HTML.
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What ages does Kind Mind Kids care for?',
    a: 'We care for children from 6 weeks to 5 years old in five classrooms: infants (6 weeks to 1 year), Toddler 1 (12 to 18 months), Toddler 2 (18 months to 2 years), Twos (2 to 3 years), and Preschool (3 to 5 years).',
  },
  {
    q: 'What are your hours?',
    a: 'We are open Monday to Friday, 7:00 AM to 5:30 PM.',
  },
  {
    q: 'Where is Kind Mind Kids located?',
    a: 'We are at 2400 West 17th Street, Wilmington, DE 19806, inside Immanuel Church Highlands.',
  },
  {
    q: 'How big are your classes?',
    a: 'We cap total enrollment at 35 children, so teachers get to know every child and family well.',
  },
  {
    q: 'Are you licensed and rated?',
    a: "Yes. We are a licensed Delaware child care center (license #1498551) and hold a Five-Star rating, Delaware's highest quality rating for child care.",
  },
  {
    q: 'What enrichment activities are included?',
    a: 'Spanish, yoga, soccer, cooking, and music are part of the regular curriculum.',
  },
  {
    q: 'Do you prepare children for kindergarten?',
    a: 'Yes. Our preschool program covers phonics, math, science, geography, and world cultures, along with the social skills children need on their first day of kindergarten.',
  },
  {
    q: 'Do you have openings, and how much is tuition?',
    a: 'Openings and tuition change during the year. Call (302) 893-1800 or email kindmindkids@gmail.com for current availability and rates.',
  },
  {
    q: 'How do I schedule a tour?',
    a: 'Call us at (302) 893-1800 or email kindmindkids@gmail.com. Tours are the best way to see if we are the right fit for your family.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-sky scroll-mt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
      <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
        <div className="lg:sticky lg:top-28 self-start">
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.25rem)] font-semibold leading-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Something else on your mind? Call{' '}
            <a href="tel:3028931800" className="font-semibold text-orange-dark underline underline-offset-4 whitespace-nowrap">(302) 893-1800</a>.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group bg-white rounded-lg border border-border px-6 open:shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold">
                <h3 className="text-base">{q}</h3>
                <ChevronDown className="w-5 h-5 shrink-0 text-orange-dark transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-muted-foreground leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
