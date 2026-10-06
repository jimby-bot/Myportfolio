import {
  House, FolderOpen, UserCircle, Lightning, PaperPlaneTilt, GraduationCap, EnvelopeSimple,
  Atom, Student, DeviceMobile,
  Browsers, Devices, Palette, ListChecks,
  Certificate, Medal, SealCheck,
  FacebookLogo, LinkedinLogo, GithubLogo,
} from '@phosphor-icons/react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

export const NAV = [
  ['home', 'Home', House],
  ['projects', 'Projects', FolderOpen],
  ['about', 'About', UserCircle],
  ['skills', 'Skills', Lightning],
  ['education', 'Education', GraduationCap],
  ['contact', 'Contact', PaperPlaneTilt],
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
  ['Responsive Websites', Devices],
  ['React Components', Atom],
  ['Mobile-friendly Pages', DeviceMobile],
  ['Clean UI Design', Palette]
]
// [title, tag, description, icon]
export const PROJECTS = [
['Personal Website', 'HTML and CSS', 'My first site, built from scratch.', Browsers],
['To-Do App', 'JavaScript', 'Add, finish and remove tasks.', ListChecks],
]
// [school, level, years]
// [school, level, years, icon]
export const EDUCATION = [
  ['Nueva Vizcaya State University', 'College', '2024 - Present', GraduationCap],
  ['Casat National High School', 'High School', '2017 - 2024', Student],
]
// [title, issuer, year, icon, link]
export const CERTIFICATES = [
  ['Responsive Web Design', 'freeCodeCamp', '2025', Certificate, ''],
  ['JavaScript Essentials', 'Cisco Networking Academy', '2025', Medal, ''],
  ['Introduction to Git and GitHub', 'Coursera', '2025', SealCheck, ''],
]
