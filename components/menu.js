import React, { Component } from 'react'

class Menu extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <menu className="menu">
      <nav className="menu-nav">
        <ul className="menu-nav-list">
          <li><a href="../LaurenColls_CV_July2016.pdf" target="_blank">Resume</a></li>
          <li><a href="mailto:colls.lauren@gmail.com?" target="_top">Contact</a></li>
          <li><a href="https://github.com/Lau-Ren" target="_blank"> Projects</a> </li>

        </ul>
        
      </nav>


    </menu>
  }

}

export default Menu
