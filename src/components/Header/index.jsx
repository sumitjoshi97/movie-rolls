import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header__brand'>Movie Rolls</div>
        <div className='header__left'>
          <div className='header__left__search'>search</div>
          <div className='header__left__browse'>browse</div>
        </div>
        <div className='header__right'>
          <div className='header__right__profile'>profile</div>
        </div>
      </div>
    )
  }
}
