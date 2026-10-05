import { Lightning } from '@phosphor-icons/react'
import Icon from './Icon.jsx'
import { TOOLS } from '../data.js'

export default function Drivers() {
  const loop = [...TOOLS, ...TOOLS] // doubled so the scroll loops with no gap
  return (
    <div className="drivers">
      <span className="ico round"><Icon icon={Lightning} weight="fill" /></span>
      <div>
        <small>Daily drivers</small>
        <b>Tools I work with</b>
      </div>
      <div className="marquee">
        <div className="track">
          {loop.map(([name, icon], i) => (
            <span key={name + i} aria-hidden={i >= TOOLS.length ? 'true' : undefined}>
              <Icon icon={icon} /> {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
