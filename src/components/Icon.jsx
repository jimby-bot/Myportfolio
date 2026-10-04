// Small helper: <Icon icon={House} /> draws a Phosphor icon at a readable size
export default function Icon({ icon: Glyph }) {
  return <Glyph size="1.25em" aria-hidden="true" style={{ verticalAlign: '-.2em' }} />
}
