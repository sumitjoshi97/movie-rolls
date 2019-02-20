import React, { Component } from 'react'
import './styles.scss'

export default class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <div className='hero__info'>
          <div className='hero__info__img' />
          <div className='hero__info__text'>
            <h1 className='hero__info__text__header'>something</h1>
            <p className='hero__info__text__summary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in
              cupiditate ad modi. Exercitationem, veritatis rat
            </p>
          </div>
        </div>
      </div>
    )
  }
}
