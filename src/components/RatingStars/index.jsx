import React, { Component } from 'react'
import Star from './Star'

import './styles.scss'

export default class RatingStars extends Component {
  renderStars = () => {
    let { stars } = this.props
    stars = stars / 2
    let renderStars = []

    for (let i = 1; i <= 5; i++) {
      if (i >= stars && i === Math.ceil(stars)) {
        renderStars.push(<Star key={i} type='half' />)
      } else if (i <= stars) {
        renderStars.push(<Star key={i} type='full' />)
      } else {
        renderStars.push(<Star key={i} type='blank' />)
      }
    }
    return renderStars
  }
  render() {
    return <div className='rating-stars'>{this.renderStars()}</div>
  }
}
