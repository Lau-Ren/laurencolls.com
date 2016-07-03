import React, { Component } from 'react'

class Menu extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <menu className="menu">
      <nav className="menu-nav">
        <ul className="menu-nav-list">
          <li>Résumé</li>
          <li>Contact</li>
          <li>Projects</li>
        </ul>
        
      </nav>


    </menu>
  }

}

export default Menu
