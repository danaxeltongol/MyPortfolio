// Projects: one big colored card per project.
// On a computer screen the cards stack on top of each other as you scroll.
import Folder from './Folder.jsx'
import Window from './Window.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <Folder id="projects" title="Projects" color="lemon" className="projects">
      {projects.map((project, index) => (
        <article
          className={`project bg-${project.color}`}
          key={project.title}
          style={{ '--i': index }} // each card stops a little lower than the one before
        >
          <div>
            <h3>{project.title}</h3>
            {/* What I did on the project */}
            {project.role && <span className="role">{project.role}</span>}
            <p>{project.description}</p>
            <ul className="chips">
              {project.tags.map((tag) => (
                <li className="chip" key={tag}>{tag}</li>
              ))}
            </ul>

            {/* Buttons only appear for projects that have links in data.js */}
            {(project.liveUrl || project.codeUrl) && (
              <div className="project-links">
                {project.liveUrl && (
                  <a className="btn small bg-lemon" href={project.liveUrl} target="_blank" rel="noopener">
                    Open live site
                  </a>
                )}
                {project.codeUrl && (
                  <a className="btn small" href={project.codeUrl} target="_blank" rel="noopener">
                    View code
                  </a>
                )}
              </div>
            )}
          </div>

          <Window title={project.windowTitle || project.title} className="tilt-right">
            {project.image ? (
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
            ) : (
              <div className="empty">Screenshot coming soon</div>
            )}
          </Window>
        </article>
      ))}
    </Folder>
  )
}
