// Hero: the first screen — name labels, short intro, buttons, photo, stickers.
import Window from './Window.jsx'
import Sticker from './Sticker.jsx'
import { profile } from '../data.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="hi">Hi, I'm</span>
          <h1 className="name">
            <span className="name-a">{profile.nameFirst}</span>
            <span className="name-b">{profile.nameLast}</span>
          </h1>
          <p className="tagline">
            <b>{profile.taglineBold}</b> {profile.tagline}
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn bg-cobalt">View my work</a>
            <a href="#contact" className="btn">Get in touch</a>
          </div>
        </div>

        <div className="photo-stack">
          <Window title={profile.photoFileName} className="tilt-right shadow-pink">
            <img src={profile.photo} alt={profile.photoAlt} />
          </Window>
          <Sticker className="round" rotate={-12}>
            {profile.stickerRound[0]}
            <br />
            {profile.stickerRound[1]}
          </Sticker>
          <Sticker className="tag" rotate={8}>{profile.stickerTag}</Sticker>
        </div>
      </div>
    </section>
  )
}
