import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavItem from './NavItem'
import './styles.scss'

export default class Nav extends Component {
  static propTypes = {
    options: PropTypes.array,
    handleNav: PropTypes.func.isRequired
  }

  state = {
    isActive: [true, false]
  }

  setActive = index => {
    let { isActive } = this.state
    if (!isActive[index]) {
      isActive[0] = !isActive[0]
      isActive[1] = !isActive[1]
    }
    this.setState({
      isActive
    })
  }

  renderNav = () => {
    return this.props.options.map((option, index) => (
      <NavItem
        key={option.type}
        index={index}
        name={option.name}
        type={option.type}
        isActive={this.state.isActive[index]}
        setActive={this.setActive}
        handleNav={this.props.handleNav}
      />
    ))
  }

  render() {
    return <nav className='nav'>{this.renderNav()}</nav>
  }
}
