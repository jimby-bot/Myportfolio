import { SealCheck, FacebookLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import Icon from './Icon.jsx'
import { NAV } from '../data.js'

export default function Sidebar({ open, setOpen, active }) {
  return (
    <aside id="menu" className={'side' + (open ? ' open' : '')} aria-label="Sidebar">
      <div className="profile">
        <div className="avatar">
          <img src='mypic.png' alt="Jimboy Torralba" />
        </div>
        <p className="name">Jimboy Torralba <span style={{ color: 'var(--dark)' }}><Icon icon={SealCheck} /></span></p>
        <p className="role">Aspiring Web Developer</p>
        <div className="soc">
          <a href="https://www.facebook.com/share/1DEHVcJrDf/" aria-label="Facebook" title="Facebook"><Icon icon={FacebookLogo} /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" title="Linkedin"><Icon icon={LinkedinLogo} /></a>
          <a href="https://github.com" aria-label="GitHub" title="Github"><Icon icon={GithubLogo} /></a>
        </div>
      </div>
      <hr />
      <nav aria-label="Main navigation">
        {NAV.map(([id, label, icon]) => (
          <a key={id} href={'#' + id} className={'nav' + (active === id ? ' on' : '')} onClick={() => setOpen(false)}>
            <Icon icon={icon} /> {label}
          </a>
        ))}
      </nav>
      <div className="copy">© 2026 Jimboy Torralba</div>
    </aside>
  )
}
