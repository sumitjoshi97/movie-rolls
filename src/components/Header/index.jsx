import React, { Component } from 'react'
import './styles.scss'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <ul className='header__left'>
          <li className='header__left__brand'>Movie Rolls</li>
          <li className='header__left__search'>search</li>
          <li className='header__left__browse'>browse</li>
        </ul>
        <ul className='header__right'>
          <li className='header__right__profile'>profile</li>
        </ul>
      </div>
    )
  }
}
