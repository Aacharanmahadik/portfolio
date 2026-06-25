import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Diploma Student | Aspiring Full Stack Developer</p>
        <h1>Hi, I'm Aacharan Nitin Mahadik</h1>
        <p className="hero-description">
          I am a third-year diploma student passionate about software
          development and web development. I build clean, responsive interfaces,
          and I am focused on learning real-world full-stack development.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-panel">
        <div className="hero-card">
          <div className="hero-stamp">Passion for Real-World Projects</div>
          <div className="hero-highlight">
            <h2>Building modern software</h2>
            <p>
              Turning ideas into polished web experiences with thoughtful
              design, responsive layout, and meaningful interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
