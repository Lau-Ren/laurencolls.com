import React, { Component } from 'react'
import Heading from './heading'
import Subheading from './sub-heading'
import Menu from './menu'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <div className="app-container">
      <div className="app-inner">
        <Heading />
        <Subheading />
        <Menu />
      </div>
    </div>
  }

}

export default App
