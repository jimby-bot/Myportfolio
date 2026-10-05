import {
  House, FolderSimple, User, Lightning, EnvelopeSimple,
  Atom,
  Browser, DeviceMobile, PaintBrush,
  FacebookLogo, LinkedinLogo, GithubLogo,
} from '@phosphor-icons/react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

export const NAV = [
  ['home', 'Home', House],
  ['projects', 'Projects', FolderSimple],
  ['about', 'About', User],
  ['skills', 'Skills', Lightning],
  ['contact', 'Contact', EnvelopeSimple],
]
export const SOCIALS = [
  // TODO: replace the LinkedIn and GitHub links with your own profile URLs
  ['Facebook', FacebookLogo, 'https://www.facebook.com/share/1DEHVcJrDf/'],
  ['LinkedIn', LinkedinLogo, 'https://linkedin.com'],
  ['GitHub', GithubLogo, 'https://github.com'],
  ['Email', EnvelopeSimple, 'mailto:torralbajimby@gmail.com'],
]
// [name, icon, brand color]
export const TOOLS = [
  ['HTML', FaHtml5, '#E34F26'],
  ['CSS', FaCss3Alt, '#1572B6'],
  ['JavaScript', FaJs, '#E6B800'],
  ['Visual Studio', VscVscode, '#007ACC'],
  ['ReactJS', FaReact, '#149ECA'],
  ['NodeJS', FaNodeJs, '#339933'],
]
export const SKILLS = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'Git']
export const SERVICES = [
  ['Responsive Websites', Browser],
  ['React Components', Atom],
  ['Mobile-friendly Pages', DeviceMobile],
  ['Clean UI Design', PaintBrush],
]
// [title, tag, description, icon]
export const PROJECTS = [
  ['Personal Website', 'HTML and CSS', 'My first site, built from scratch.', Browser],
  ['To-Do App', 'JavaScript', 'Add, finish and remove tasks.', DeviceMobile],
]
