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
          src={`https://image.tmdb.org/t/p/w185/${poster}`}
          alt={name}
          className='list-item__img'
        />
        <div className='list__item__name'>{name}</div>
        <div className='list__item__name__sub'>{role}</div>
      </div>
    )
  }
}
