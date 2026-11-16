// Skills ("What I can do"): one colored card per area,
// with a short description and the tools used for it.
import Folder from './Folder.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Folder id="skills" title={skills.title} color="mint" className="skills">
      {skills.cards.map((card) => (
        <div className={`kit bg-${card.color}`} key={card.title}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          <ul className="chips">
            {card.tools.map((tool) => (
              <li className="chip" key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      ))}
    </Folder>
  )
}
