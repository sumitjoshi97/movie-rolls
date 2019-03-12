import React, { Component } from 'react'

export default class ActionBtn extends Component {
  render() {
    const style =
      this.props.active === this.props.name
        ? { backgroundColor: '#333', color: '#fff' }
        : null

    return (
      <button
        name='movie'
        onClick={() => this.props.onclick(this.props.name)}
        style={style}
      >
        {this.props.text} {this.props.name === 'movie' ? 'movies' : 'shows'}
      </button>
    )
  }
}
