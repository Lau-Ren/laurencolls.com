import React, { Component } from 'react'
import Heading from './heading'
import Subheading from './sub-heading'
import Menu from './menu'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <div>
      <Heading />
      <Subheading />
      <Menu />
    </div>
  }

}

export default App
