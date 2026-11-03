// The yellow ground arc from under the logo's building blocks (public/brand/kmk-mark.svg),
// redrawn as a stretchable crescent: thick in the middle, tapering to points at the ends.
// Used under the hero photo and along the bottom of the CTA. Purely decorative; callers set
// the size and position through className.
export default function Arc({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block fill-yellow ${className}`}
    >
      <path d="M0 22 Q200 -2 400 22 Q200 10 0 22 Z" />
    </svg>
  )
}
