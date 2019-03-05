import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class CastItem extends PureComponent {
  static propTypes = {
    poster: PropTypes.string,
    name: PropTypes.string.isRequired,
    role: PropTypes.string
  }

  render() {
    const { poster, name, role } = this.props

    return (
      <div className='list-item'>
        <img
          src={
            poster
              ? `https://image.tmdb.org/t/p/w185/${poster}`
              : require('../../../assets/placeholder.png')
          }
          alt={name}
          className='list-item__img'
        />
        <div className='list-item__name'>{name}</div>
        <div className='list-item__name__sub'>{role}</div>
      </div>
    )
  }
}
