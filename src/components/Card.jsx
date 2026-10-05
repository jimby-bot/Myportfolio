import Icon from './Icon.jsx'

export default function Card({ id, icon, title, wide, children }) {
  return (
    <section className={'card' + (wide ? ' wide' : '')} id={id}>
      <h2>
        <span className="ico"><Icon icon={icon} /></span> {title}
      </h2>
      {children}
    </section>
  )
}
