// Navbar: the floating menu at the top.
// - The yellow highlight follows the section you are reading.
// - On phones, the menu button opens and closes the list of links.
import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data.js'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    // Watch every section and remember which one is in the middle of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )
    document.querySelectorAll('[data-section]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="nav">
      <nav className="nav-pill" aria-label="Primary">
        <a href="#home" className="nav-me" aria-label="Back to top" onClick={closeMenu}>
          {/* The small round photo. Change it with "avatar" in data.js */}
          <img src={profile.avatar} alt="" />
        </a>
        <a href="#home" className="nav-name" onClick={closeMenu}>{profile.name}</a>

        <button
          className="nav-menu"
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i></i>
          <i></i>
          <i></i>
        </button>

        <ul className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="navLinks">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? 'on' : ''}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className={`cta ${activeId === 'contact' ? 'on' : ''}`} onClick={closeMenu}>
              Say hello
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
