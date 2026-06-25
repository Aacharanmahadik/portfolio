import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="nav-brand">
        <span className="logo-mark">A</span>
        <span className="brand-text">Aacharan  Mahadik</span>
      </div>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a className="nav-link" href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a className="nav-link" href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
        <a className="nav-link" href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a className="nav-link" href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Navbar
