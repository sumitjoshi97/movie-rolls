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
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: 'linear'
}

class Home extends Component {
  static propTypes = {
    currentMovies: PropTypes.object,
    popularMovies: PropTypes.object,
    upcomingMovies: PropTypes.object,
    topMovies: PropTypes.object,
    currentShows: PropTypes.object,
    popularShows: PropTypes.object,
    airingShows: PropTypes.object,
    topShows: PropTypes.object,
    fetchCurrentMovies: PropTypes.func,
    fetchPopularMovies: PropTypes.func,
    fetchUpcomingMovies: PropTypes.func,
    fetchTopMovies: PropTypes.func,
    fetchCurrentShows: PropTypes.func,
    fetchPopularShows: PropTypes.func,
    fetchAiringShows: PropTypes.func,
    fetchTopShows: PropTypes.func
  }

  state = {
    currentType: 'movie'
  }

  componentDidMount() {
    this.props.fetchCurrentMovies()
    this.props.fetchCurrentShows()

    this.props.fetchPopularMovies()
    this.props.fetchUpcomingMovies()
    this.props.fetchTopMovies()

    this.props.fetchPopularShows()
    this.props.fetchAiringShows()
    this.props.fetchTopShows()
  }

  renderHero = () => {
    const { currentMovies, currentShows } = this.props

    let renderData = []

    if (currentMovies && currentShows) {
      renderData.push(
        { data: currentMovies.results[0], type: 'movie' },
        { data: currentMovies.results[1], type: 'movie' },
        { data: currentShows.results[0], type: 'tv' },
        { data: currentShows.results[1], type: 'tv' }
      )

      return renderData.map(slide => {
        if (slide.type === 'movie') {
          return (
            <Hero
              key={slide.data.id}
              pageId={slide.data.id}
              title={slide.data.title}
              poster={slide.data.poster_path}
              backdrop={slide.data.backdrop_path}
              rating={slide.data.vote_average}
              type={slide.type}
              summary={slide.data.overview}
              adult={slide.data.adult}
              year={slide.data.release_date.split('-')[0]}
              history={this.props.history}
              location='/'
            />
          )
        } else {
          return (
            <Hero
              key={slide.data.id}
              pageId={slide.data.id}
              title={slide.data.name}
              poster={slide.data.poster_path}
              backdrop={slide.data.backdrop_path}
              rating={slide.data.vote_average}
              type={slide.type}
              summary={slide.data.overview}
              year={slide.data.first_air_date.split('-')[0]}
              history={this.props.history}
              location='/'
            />
          )
        }
      })
    }

    return renderData
  }

  handleNav = itemType => {
    this.setState({
      currentType: itemType
    })
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
            <List type='tv' name='airing today' items={airingShows.results} />
            <List type='tv' name='popular' items={popularShows.results} />
            <List type='tv' name='on TV' items={currentShows.results} />
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

        <div className='home__hero'>
          <Slider {...sliderOptions}>{this.renderHero()}</Slider>
          <Nav
            handleNav={this.handleNav}
            options={[
              { name: 'movies', type: 'movie' },
              { name: 'tv shows', type: 'tv' }
            ]}
          />
        </div>

        <div className='home__lists'>{this.renderLists()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // movies state
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
