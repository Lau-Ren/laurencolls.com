import React, { Component } from 'react'

class Menu extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <menu className="menu">
      <nav className="menu-nav">
        <ul className="menu-nav-list">
          <li><a href="../images/LaurenColls_CV_131118.pdf" target="_blank" id="menu-resume">resume</a></li>
          <li><a href="mailto:colls.lauren@gmail.com?" target="_top" id="menu-contact">contact</a></li>
          <li><a href="https://github.com/Lau-Ren" target="_blank" id="menu-projects"> projects</a> </li>
        </ul>
      </nav>
    </menu>
  }
}

export default Menu
