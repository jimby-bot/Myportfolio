// One place to control icon size and style for the whole site.
export default function Icon({ icon: Glyph, size = 22, weight = 'duotone' }) {
  return <Glyph size={size} weight={weight} aria-hidden="true" />
}
