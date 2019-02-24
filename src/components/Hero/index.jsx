import React from 'react'
import PropTypes from 'prop-types'
import RatingStars from '../RatingStars'
import './styles.scss'

const Hero = ({
  title,
  poster,
  backdrop,
  rating,
  type,
  summary,
  adult,
  year
}) => {
  const heroBackdrop = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original${backdrop})`
  }

  return (
    <div className='hero' style={heroBackdrop}>
      <div className='hero__info'>
        <img
          src={`https://image.tmdb.org/t/p/w185/${poster}`}
          alt=''
          className='hero__info__img'
        />
        <div className='hero__info__text'>
          <h1 className='hero__info__text__header'>{title}</h1>
          <div className='hero__info__text__rating'>
            {rating}
            <RatingStars stars={rating} />
          </div>
          <div className='hero__info__text__type'>
            <span>{type}</span>
            <span className='hero__info__text__adult'>
              {adult ? '18+' : ''}
            </span>

            <span className='hero__info__text__year'>{year}</span>
          </div>

          <p className='hero__info__text__summary'>{summary}</p>
          <button className='hero__info__text__favorite-btn'>
            add to favorite
          </button>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  backdrop: PropTypes.string,
  rating: PropTypes.number,
  summary: PropTypes.string,
  adult: PropTypes.bool,
  year: PropTypes.string
}

export default Hero
