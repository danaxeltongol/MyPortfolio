// About: photo, the story in a few paragraphs, how I work, and fact cards.
import Folder from './Folder.jsx'
import { about } from '../data.js'

export default function About() {
  return (
    <Folder id="about" title="About me" color="pink" className="about">
      <div className="about-top">
        <img className="about-photo" src={about.photo} alt={about.photoAlt} />
        <div className="about-story">
          {about.paragraphs.map((paragraph, index) => (
            // The first paragraph is slightly bigger than the rest.
            <p className={index === 0 ? 'lead' : ''} key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <ul className="principles">
        {about.principles.map((principle) => (
          <li key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </li>
        ))}
      </ul>

      <dl className="facts">
        {about.facts.map((fact) => (
          <div className={`fact bg-${fact.color}`} key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Folder>
  )
}
