import {
  House, FolderSimple, User, Lightning, EnvelopeSimple,
  FileHtml, FileCss, FileJs, Code, Atom, Hexagon,
  Browser, DeviceMobile, PaintBrush,
  FacebookLogo, LinkedinLogo, GithubLogo,
} from '@phosphor-icons/react'

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
export const TOOLS = [
  ['HTML', FileHtml], ['CSS', FileCss], ['JavaScript', FileJs],
  ['Visual Studio', Code], ['ReactJS', Atom], ['NodeJS', Hexagon],
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
