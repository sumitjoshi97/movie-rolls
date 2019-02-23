import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Nav from '../../components/Nav'
import List from '../../components/List'

import * as actions from '../../actions'

class Home extends Component {
  componentDidMount() {
    this.props.fetchCurrentMovies()
    this.props.fetchCurrentShows()
  }

  renderHero = () => {
    const { currentMovies, currentShows } = this.props

    let renderData = []
    renderData.push(
      currentMovies.results[0],
      currentMovies.results[1],
      currentShows.results[0],
      currentShows.results[1]
    )

    return renderData.map(slide => (
      <Hero
        title={slide.title}
        poster={slide.poster_path}
        backdrop={slide.backdrop_path}
        rating={slide.vote_average}
        summary={slide.overview}
        adult={slide.adult}
        year={slide.release_date.split('-')[0]}
      />
    ))
  }
  render() {
    return (
      <div className='home'>
        <Header />
        <Hero />
        <Nav />
        <List />
        <List />
      </div>
    )
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
)(Home)
