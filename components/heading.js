import React, { Component } from 'react'

class Heading extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    return <div>
      <header className="header" >
        <div className="header-inner">
          <div className="header-name">
            <h1 className="header-side header-left">Lau</h1>
            <h1 className="header-side header-left">Ren</h1>
          </div>
          
        </div>  
      </header>
     </div> 
  }

}

export default Heading
