import React, { Component } from 'react'

import './styles.scss'

export default class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <div className='nav__movies'>Movies</div>
        <div className='nav__shows'>TV shows</div>
      </nav>
    )
  }
}
