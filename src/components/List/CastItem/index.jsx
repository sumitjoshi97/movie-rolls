import React from 'react'
import PropTypes from 'prop-types'

const CastItem = ({ poster, name, role }) => (
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

CastItem.propTypes = {
  poster: PropTypes.string,
  name: PropTypes.string.isRequired,
  role: PropTypes.string
}

export default CastItem
