import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import List from '../../components/List'
import InputSlider from '../../components/InputSlider'
import InputDropdown from '../../components/InputDropdown'

import * as actions from '../../actions'

import './styles.scss'

class Discover extends Component {
  static propTypes = {
    movies: PropTypes.object,
    shows: PropTypes.object,
    fetchDiscoverMovies: PropTypes.func,
    fetchDiscoverShows: PropTypes.func
  }

  state = {
    year: {
      label: String(new Date().getFullYear()),
      value: String(new Date().getFullYear())
    },
    ratings: {
      min: 5,
      max: 10
    },
    sortBy: {
      label: 'ratings',
      value: 'vote_average'
    },
    orderBy: {
      label: 'descending',
      value: 'desc'
    }
  }

  componentDidMount() {
    this.fetchDiscoverData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.fetchDiscoverData()
    }
  }

  fetchDiscoverData = () => {
    const { year, ratings, sortBy, orderBy } = this.state
    const queryData = {
      year: year.value,
      ratings,
      sortBy: sortBy.value,
      orderBy: orderBy.value
    }
    this.props.fetchDiscoverMovies(queryData)
    this.props.fetchDiscoverShows(queryData)
  }

  renderLists = () => {
    if (this.props.movies && this.props.shows) {
      return (
        <>
          <List type='movie' name='Movies' items={this.props.movies.results} />
          <List type='tv' name='TV Shows' items={this.props.shows.results} />
        </>
      )
    }
  }

  handleRatings = value => {
    this.setState({ ratings: value })
  }

  handleDropdown = (name, option) => {
    this.setState({
      [name]: option
    })
  }

  render() {
    const rangeDate = (start, end) =>
      Array.from({ length: end - start }, (value, key) => {
        return { label: key + start + 1, value: key + start + 1 }
      }).reverse()

    const sortList = [
      { value: 'vote_average', label: 'ratings' },
      { value: 'popularity', label: 'popularity' },
      { value: 'title', label: 'title' }
    ]

    const orderList = [
      { value: 'desc', label: 'descending' },
      { value: 'asc', label: 'ascending' }
    ]

    return (
      <div className='discover'>
        <div className='discover__header'>
          <h2 className='discover__header__primary'>Discover</h2>
          <h4 className='discover__header__secondary'>
            - browse by year, ratings, type
          </h4>
        </div>

        <div className='discover__filters'>
          <div className='discover__filters__left'>
            <div className='discover__filters__left__rating'>
              <h3 className='discover__filters__header'>Ratings</h3>
              <InputSlider
                handleRatings={this.handleRatings}
                value={this.state.ratings}
              />
            </div>

            <div className='discover__filters__left__year'>
              <h3 className='discover__filters__header'>Year</h3>
              <InputDropdown
                name='year'
                options={rangeDate(1920, new Date().getFullYear())}
                handleDropdown={this.handleDropdown}
                value={this.state.year}
              />
            </div>
          </div>

          <div className='discover__filters__right'>
            <div className='discover__filters__right__sort'>
              <h3 className='discover__filters__header'>sort by</h3>
              <InputDropdown
                name='sortBy'
                options={sortList}
                handleDropdown={this.handleDropdown}
                value={this.state.sortBy}
              />
            </div>

            <div className='discover__filters__right__order'>
              <h3 className='discover__filters__header'>order by</h3>
              <InputDropdown
                name='orderBy'
                options={orderList}
                handleDropdown={this.handleDropdown}
                value={this.state.orderBy}
              />
            </div>
          </div>
        </div>

        <div className='discover__list'>{this.renderLists()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.discover.movies,
  shows: state.discover.shows
})

const mapDispatchToProps = dispatch => ({
  fetchDiscoverMovies: query =>
    dispatch(actions.getDiscoverMovieResults(query)),

  fetchDiscoverShows: query => dispatch(actions.getDiscoverShowResults(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover)
