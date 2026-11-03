
const contactItems = [
  {
    label: 'Address',
    content: (
      <>
        2400 West 17th Street<br />
        Wilmington, DE 19806<br />
        <span className="text-muted-foreground">at Immanuel Church Highlands</span>
      </>
    ),
  },
  {
    label: 'Phone',
    content: <a href="tel:3028931800" className="hover:text-orange-dark transition-colors">(302) 893-1800</a>,
  },
  {
    label: 'Email',
    content: <a href="mailto:kindmindkids@gmail.com" className="hover:text-orange-dark transition-colors">kindmindkids@gmail.com</a>,
  },
  {
    label: 'Hours',
    content: (
      <>
        Monday to Friday<br />
        7:00 AM to 5:30 PM
      </>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight mb-3">
            We'd love to hear from you
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Questions about enrollment, tuition, or openings? Call or email and we'll get back to you.
          </p>

          <div className="flex flex-col gap-5">
            {contactItems.map(({ label, content }) => (
              <div key={label}>
                <p className="font-semibold text-sm mb-0.5">{label}</p>
                <div className="text-sm text-muted-foreground leading-relaxed">{content}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg overflow-hidden min-h-[400px] bg-sky">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.5!2d-75.574!3d39.743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd45c7463f5f%3A0x3e1c3d3b3b3b3b3b!2s2400+W+17th+St%2C+Wilmington%2C+DE+19806!5e0!3m2!1sen!2sus!4v1"
            className="w-full h-full min-h-[400px] border-0 saturate-[0.8] contrast-[0.95]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kind Mind Kids location"
          />
        </div>
      </div>
    </section>
  )
}
