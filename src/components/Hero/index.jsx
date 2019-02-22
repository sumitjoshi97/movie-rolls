import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import './styles.scss'

class Hero extends Component {
  componentDidMount() {
    this.props.fetchCurrentMovies()
  }
  render() {
    const { currentMovies } = this.props

    let data = <div>to be loaded</div>
    if (currentMovies) {
      const heroBackdrop = {
        background: `https://image.tmdb.org/t/p/original/${
          currentMovies.results[0].backdrop_path
        }, rgba(0,0,0,0.45)`
      }

      data = (
        <div className='hero__info' style={heroBackdrop}>
          <img
            src={`https://image.tmdb.org/t/p/w185/${
              currentMovies.results[0].poster_path
            }`}
            alt=''
            className='hero__info__img'
          />
          <div className='hero__info__text'>
            <h1 className='hero__info__text__header'>
              {currentMovies.results[0].title}
            </h1>
            <span className='hero__info__text__rating'>
              {currentMovies.results[0].vote_average}
            </span>
            <span className='hero__info__text__adult'>
              {currentMovies.results[0].adult}
            </span>
            <span className='hero__info__text__language'>
              {currentMovies.results[0].original_language}
            </span>
            <span className='hero__info__text__year'>
              {currentMovies.results[0].release_date}
            </span>
            <p className='hero__info__text__summary'>
              {currentMovies.results[0].overview}
            </p>
            <button className='hero__info__favorite-btn'>
              add to favorite
            </button>
          </div>
        </div>
      )
    }

    return <div className='hero'>{data}</div>
  }
}

const mapStateToProps = state => ({
  latest: state.movies.latest,
  currentMovies: state.movies.currentMovies
})

const mapDispatchToProps = dispatch => ({
  fetchCurrentMovies: () => dispatch(actions.getCurrentMovies())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero)
