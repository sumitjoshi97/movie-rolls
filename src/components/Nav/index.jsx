import React, { Component } from 'react'
import NavItem from './NavItem'
import './styles.scss'

export default class Nav extends Component {
  state = {
    isActive: [false, false]
  }
  changeData = e => {}
  render() {
    return (
      <nav className='nav'>
        <NavItem name='movies' />
        <NavItem name='tv shows' />
      </nav>
    )
  }
}
