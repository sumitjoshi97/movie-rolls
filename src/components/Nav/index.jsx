import React, { Component } from 'react'
import NavItem from './NavItem'
import './styles.scss'

export default class Nav extends Component {
  state = {
    isActive: [false, false]
  }

  renderNav = () => {
    return this.props.options.map(option => <NavItem name={option} />)
  }

  render() {
    return <nav className='nav'>{this.renderNav()}</nav>
  }
}
