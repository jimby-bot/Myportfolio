import { useState, useEffect } from 'react'
import { List, X, ArrowUpRight, ArrowRight, EnvelopeSimple, SealCheck, GraduationCap, FolderSimple, User, Lightning, Browser } from '@phosphor-icons/react'
import Icon from './components/Icon.jsx'
import Sidebar from './components/Sidebar.jsx'
import Drivers from './components/Drivers.jsx'
import Card from './components/Card.jsx'
import HeroArt from './components/HeroArt.jsx'
import { NAV, SKILLS, SERVICES, PROJECTS, EDUCATION } from './data.js'

export default function App() {
  const [open, setOpen] = useState(false)      // is the mobile menu open?
  const [active, setActive] = useState('home') // which nav link is highlighted?

  // highlight the nav link of the section currently on screen
  useEffect(() => {
    const onScroll = () => {
      let current = 'home'
      NAV.forEach(([id]) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 180) current = id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="layout">
      <div className="mbar">
        <span className="brand">Jimboy Torralba</span>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <Icon icon={open ? X : List} />
        </button>
      </div>
      <div className={'overlay' + (open ? ' show' : '')} onClick={() => setOpen(false)}></div>

      <Sidebar open={open} setOpen={setOpen} active={active} />

      <main>
        <div className="top" id="home">
          <span className="eyebrow"><span className="dot"></span> Open to learning and internships</span>
          <h1>Learn it once. <span className="grad">Build it forever.</span></h1>
          <p className="lead">I'm a student web developer, I'm continuously learning, improving my skills, and turning small ideas into meaningful digital experiences.</p>
          <div className="btns">
            <a className="btn" href="#contact">Get in touch <Icon icon={ArrowUpRight} /></a>
            <a className="btn alt" href="#projects">View projects</a>
          </div>
          <HeroArt />
        </div>

        <Drivers />

        <div className="bento">
           <Card id="about" icon={User} title="About">
            <p>Hi, I’m Jimboy Torralba, a 3rd-year BSIT student at Nueva Vizcaya State University.
              I’m passionate about learning web development and building practical digital solutions.
              I continue to improve my skills one step at a time, with the goal of becoming a full-stack developer..</p>
            <div className="bar" aria-hidden="true"><span></span></div>
          </Card>
            </div>
          </Card>
           <Card id="projects" icon={FolderSimple} title="Projects" wide>
            <p>Websites and apps I built while learning.</p>
            <div className="tiles">
              {PROJECTS.map(([title, tag, desc, icon]) => (
                <div className="tile" key={title}>
                  <span className="ico"><Icon icon={icon} /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <span className="tag">{tag}</span>
                  </div>
                  <span className="go"><Icon icon={ArrowRight} size={18} weight="bold" /></span>
                </div>
              ))}
          <Card id="skills" icon={Lightning} title="Skills">
            <p>What I'm practicing.</p>
            <div className="chips">{SKILLS.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
          </Card>
          <Card icon={GraduationCap} title="Credentials">
            <p>Student web developer, growing every day.</p>
            <span className="badge"><Icon icon={SealCheck} /> Learning</span>
          </Card>
          <Card icon={Browser} title="Services">
            <p>What I can build.</p>
            <ul className="list">
              {SERVICES.map(([name, icon], i) => <li key={name}><Icon icon={icon} /> {name}<em>0{i + 1}</em></li>)}
            </ul>
          </Card>       
          <Card id="education" icon={GraduationCap} title="Education" wide>
            <p>Where I'm learning.</p>
            <ul className="edu">
              {EDUCATION.map(([school, program, years]) => (
                <li key={school}>
                  <span className="ico"><Icon icon={GraduationCap} /></span>
                  <div><h3>{school}</h3><p>{program}</p></div>
                  {years && <span className="tag">{years}</span>}
                </li>
              ))}
            </ul>
          </Card>
          <Card id="contact" icon={EnvelopeSimple} title="Contact" wide>
            <p>Let's work together or just say hello.</p>
            <a className="btn" href="mailto:torralbajimby@gmail.com"><Icon icon={EnvelopeSimple} /> Email me</a>
          </Card>
        </div>
        <footer>© 2026 Jimboy Torralba. All rights reserved.</footer>
      </main>
    </div>
  )
}
