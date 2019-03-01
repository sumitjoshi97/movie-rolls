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

  state = {
    currentType: 'movie'
  }

  componentDidMount() {
    this.props.fetchCurrentMovies()
    this.props.fetchCurrentShows()

    if (this.state.currentType === 'movie') {
      this.props.fetchPopularMovies()
      this.props.fetchUpcomingMovies()
      this.props.fetchTopMovies()
    } else {
      this.props.fetchPopularShows()
      this.props.fetchAiringShows()
      this.props.fetchTopShows()
    }
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
              type={slide.type}
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

  renderLists = () => {
    if (this.state.currentType === 'movie') {
      const {
        currentMovies,
        popularMovies,
        topMovies,
        upcomingMovies
      } = this.props

      if (currentMovies && popularMovies && topMovies && upcomingMovies) {
        return (
          <>
            <List
              type='movie'
              name='in theaters'
              items={currentMovies.results}
            />
            <List type='movie' name='popular' items={popularMovies.results} />
            <List type='movie' name='upcoming' items={upcomingMovies.results} />
            <List type='movie' name='top rated' items={topMovies.results} />
          </>
        )
      }
    } else {
      const { currentShows, popularShows, topShows, airingShows } = this.props

      if (currentShows && popularShows && topShows && airingShows) {
        return (
          <>
            <List type='tv' name='airing now' items={currentShows.results} />
            <List type='tv' name='popular' items={popularShows.results} />
            <List type='tv' name='airing' items={airingShows.results} />
            <List type='tv' name='top rated' items={topShows.results} />
          </>
        )
      }
    }
  }

  render() {
    return (
      <div className='home'>
        <Header />
        <Slider {...sliderOptions}>{this.renderHero()}</Slider>
        <Nav options={['movies', 'tv shows']} />
        {this.renderLists()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // movies state
  latest: state.movies.latest,
  currentMovies: state.movies.current,
  popularMovies: state.movies.popular,
  upcomingMovies: state.movies.upcoming,
  topMovies: state.movies.top,

  // shows state
  currentShows: state.shows.current,
  popularShows: state.shows.popular,
  airingShows: state.shows.airingToday,
  topShows: state.shows.top
})

const mapDispatchToProps = dispatch => ({
  // movies actions
  fetchCurrentMovies: () => dispatch(actions.getCurrentMovies()),
  fetchPopularMovies: () => dispatch(actions.getPopularMovies()),
  fetchUpcomingMovies: () => dispatch(actions.getUpcomingMovies()),
  fetchTopMovies: () => dispatch(actions.getTopMovies()),

  // TV shows actions
  fetchCurrentShows: () => dispatch(actions.getCurrentShows()),
  fetchPopularShows: () => dispatch(actions.getPopularShows()),
  fetchAiringShows: () => dispatch(actions.getAiringTodayShows()),
  fetchTopShows: () => dispatch(actions.getTopShows())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
