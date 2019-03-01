import React, { Component } from 'react'
import NavItem from './NavItem'
import './styles.scss'

export default class Nav extends Component {
  state = {
    isActive: [true, false]
  }

  setActive = index => {
    let { isActive } = this.state
    if (!isActive[index]) {
      isActive[0] = !isActive[0]
      isActive[1] = !isActive[1]
    }
    console.log(isActive)
    this.setState({
      isActive
    })
  }

  renderNav = () => {
    return this.props.options.map((option, index) => (
      <NavItem
        name={option}
        key={index}
        index={index}
        isActive={this.state.isActive[index]}
        setActive={this.setActive}
      />
    ))
  }

  render() {
    return <nav className='nav'>{this.renderNav()}</nav>
  }
}
