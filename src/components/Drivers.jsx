import Icon from './Icon.jsx'
import { TOOLS } from '../data.js'

export default function Drivers() {
  const items = [...TOOLS, ...TOOLS] // doubled so the marquee loops without a gap
  return (
    <div className="drivers">
      <div><small>Daily drivers</small><b>Tools I work with</b></div>
      <div className="marquee" aria-label="Tools I work with">
        <div className="track">
          {items.map(([name, icon], i) => (
            <span key={i}><Icon icon={icon} /> {name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
