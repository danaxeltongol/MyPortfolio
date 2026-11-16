// Education: a school ID card, three highlights, and the Google Map.
import Folder from './Folder.jsx'
import Window from './Window.jsx'
import { education } from '../data.js'

// One color per highlight square.
const squareColors = ['lemon', 'pink', 'mint']

export default function Education() {
  return (
    <Folder id="education" title="Education" color="sky" className="edu">
      <div className="idcard">
        <div className="idcard-top">{education.school}</div>
        <div className="idcard-body">
          <h3>{education.degree}</h3>
          <span className="years">{education.dates}</span>
        </div>
      </div>

      <ul className="points">
        {education.highlights.map((line, index) => (
          <li key={line}>
            <i className={`bg-${squareColors[index % squareColors.length]}`}></i>
            {line}
          </li>
        ))}
      </ul>

      <Window title="TIP Manila on the map" className="map-window">
        <iframe
          src={education.mapUrl}
          title={education.mapTitle}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Window>
    </Folder>
  )
}
