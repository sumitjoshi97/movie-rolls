import React, { Component } from 'react'

export default class NavItem extends Component {
  render() {
    const style = {
      active: {
        borderBottom: '0.5rem solid #ff0000'
      },
      inActive: {
        borderBottom: '0.5rem solid transparent'
      }
    }

    return (
      <div
        name={this.props.name}
        className='nav-item'
        style={this.props.isActive ? style.active : style.inActive}
        onClick={() => this.props.setActive(this.props.index)}
      >
        {this.props.name}
      </div>
    )
  }
}
