// Adds `visible` to `.reveal` elements (inside the ref'd element) the first time they
// scroll into view. Currently drives the Enrichment block-drop, the page's one
// scroll-triggered animation (see `.block-drop` in src/index.css).
import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    // Observe the element itself and any children with .reveal
    const revealEls = el.querySelectorAll('.reveal')
    revealEls.forEach((child) => observer.observe(child))
    if (el.classList.contains('reveal')) observer.observe(el)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
