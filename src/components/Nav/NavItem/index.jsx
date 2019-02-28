import React, { Component } from 'react'

export default class NavItem extends Component {
  state = {
    isActive: false
  }

  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  render() {
    // const classes =
    return (
      <div
        className={this.state.isActive ? 'border' : ''}
        name={this.props.name}
        onClick={this.handleClick}
      >
        {this.props.name}
      </div>
    )
  }
}
