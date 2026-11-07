import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Programs from '@/components/sections/Programs'
import Enrichment from '@/components/sections/Enrichment'
import WhyUs from '@/components/sections/WhyUs'
// Testimonials hidden until real reviews are in; restore this import, the <Testimonials /> line
// below and the Families link in Navbar.jsx
// import Testimonials from '@/components/sections/Testimonials'
import Facilities from '@/components/sections/Facilities'
import Faq from '@/components/sections/Faq'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <About />
        <Programs />
        <Enrichment />
        {/* <Testimonials /> */}
        <Facilities />
        <Faq />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
