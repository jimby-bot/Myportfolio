import {
  House, FolderSimple, User, Lightning, EnvelopeSimple,
  FileHtml, FileCss, FileJs, Code, Atom, Hexagon,
  Browser, DeviceMobile, PaintBrush,
} from '@phosphor-icons/react'

export const NAV = [
  ['home', 'Home', House],
  ['projects', 'Projects', FolderSimple],
  ['about', 'About', User],
  ['skills', 'Skills', Lightning],
  ['contact', 'Contact', EnvelopeSimple],
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
export const PROJECTS = [
  ['Personal Website', 'HTML and CSS', 'My first site, built from scratch.'],
  ['To-Do App', 'JavaScript', 'Add, finish and remove tasks.'],
]
