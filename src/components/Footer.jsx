// Footer: copyright line (the year updates by itself) and a back-to-top link.
import { profile } from '../data.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="foot">
      <span>© {year} {profile.name}</span>
      <a href="#home">Back to top</a>
    </footer>
  )
}
