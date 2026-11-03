// The yellow ground arc from under the logo's building blocks (public/brand/kmk-mark.svg).
// Like the logo's, it is a band of even thickness with rounded ends, not a tapered crescent.
// The curve stretches to the box set by className (its rise is half the box height), while
// `thickness` stays in screen pixels thanks to non-scaling-stroke. `ground` (a fill class)
// paints the area under the curve, so a section can end on the arc with the next
// section's color below it, as the logo's arc has white below. Purely decorative.
export default function Arc({ className = '', thickness = 12, ground }) {
  return (
    <svg
      viewBox="0 0 400 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block overflow-visible ${className}`}
    >
      {ground && <path d="M0 36 Q200 -4 400 36 L400 40 L0 40 Z" className={ground} />}
      <path
        d="M0 36 Q200 -4 400 36"
        fill="none"
        strokeWidth={thickness}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className="stroke-yellow"
      />
    </svg>
  )
}
