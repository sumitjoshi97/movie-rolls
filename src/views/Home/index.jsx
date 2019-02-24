import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Nav from '../../components/Nav'
import List from '../../components/List'

import * as actions from '../../actions'

import './styles.scss'

const sliderOptions = {
  arrows: false,
  dots: true,
  infinite: true,
  vertical: true,
  verticalSwiping: true,
  fade: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear'
}

class Home extends Component {
  static propTypes = {
    fetchCurrentMovies: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchCurrentMovies()
    this.props.fetchCurrentShows()
  }

  renderHero = () => {
    const { currentMovies, currentShows } = this.props

    let renderData = []

    if (currentMovies && currentShows) {
      renderData.push(
        { data: currentMovies.results[0], type: 'movie' },
        { data: currentMovies.results[1], type: 'movie' },
        { data: currentShows.results[0], type: 'show' },
        { data: currentShows.results[1], type: 'show' }
      )

      return renderData.map(slide => {
        if (slide.type === 'movie') {
          return (
            <Hero
              key={slide.data.id}
              title={slide.data.title}
              poster={slide.data.poster_path}
              backdrop={slide.data.backdrop_path}
              rating={slide.data.vote_average}
              type={}
              summary={slide.data.overview}
              adult={slide.data.adult}
              year={slide.data.release_date.split('-')[0]}
            />
          )
        } else {
          return (
            <Hero
              key={slide.data.id}
              title={slide.data.name}
              poster={slide.data.poster_path}
              backdrop={slide.data.backdrop_path}
              rating={slide.data.vote_average}
              type={slide.type}
              summary={slide.data.overview}
              year={slide.data.first_air_date.split('-')[0]}
            />
          )
        }
      })
    }

    return renderData
  }
  render() {
    return (
      <div className='home'>
        <Header />
        <Slider {...sliderOptions}>{this.renderHero()}</Slider>
        <Nav />
        <List />
        <List />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  latest: state.movies.latest,
  currentMovies: state.movies.currentMovies,
  currentShows: state.shows.currentShows
})

const mapDispatchToProps = dispatch => ({
  fetchCurrentMovies: () => dispatch(actions.getCurrentMovies()),
  fetchCurrentShows: () => dispatch(actions.getCurrentShows())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
