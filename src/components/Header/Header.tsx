import { Container } from './styles'
import { NavHashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <NavHashLink smooth to="#home" className="logo">
        <span>{'<N_K_S />'}</span>
      </NavHashLink>
      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>
      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>
          About me
        </NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>
          Project
        </NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>
          Contact
        </NavHashLink>
        <NavLink to="/blog" onClick={closeMenu}>
          Blog
        </NavLink>
      </nav>
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive)
        }}
      ></div>
    </Container>
  )
}
