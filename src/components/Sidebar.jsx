import { SealCheck } from '@phosphor-icons/react'
import myPic from '../myPic.png'          // <- this import was missing ("myPic is not defined")
import Icon from './Icon.jsx'
import { NAV, SOCIALS } from '../data.js'

export default function Sidebar({ open, setOpen, active }) {
  return (
    <aside className={'side' + (open ? ' open' : '')} id="menu" aria-label="Main menu">
      <div className="profile">
        <div className="avatar">
          <img src={myPic} alt="Portrait of Jimboy Torralba" />
        </div>
        <p className="name">
          Jimboy Torralba <SealCheck size={24} weight="duotone" aria-label="Verified" />
        </p>
        <p className="role">Aspiring Web Developer</p>
        <div className="soc">
          {SOCIALS.map(([label, icon, href]) => (
            <a key={label} href={href} aria-label={label} title={label}
               target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <Icon icon={icon} weight="fill" />
            </a>
          ))}
        </div>
      </div>
      <hr />
      <nav aria-label="Sections">
        {NAV.map(([id, label, icon]) => (
          <a key={id} href={'#' + id} onClick={() => setOpen(false)}
             className={'nav' + (active === id ? ' on' : '')}
             aria-current={active === id ? 'true' : undefined}>
            <Icon icon={icon} /> {label}
          </a>
        ))}
      </nav>
      <p className="copy">© 2026 Jimboy Torralba</p>
    </aside>
  )
}
