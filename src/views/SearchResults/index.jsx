import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import List from '../../components/List'

import { getSearchResults } from '../../actions'

import './styles.scss'

class SearchResults extends Component {
  static propTypes = {
    searchResults: PropTypes.object,
    getSearchResults: PropTypes.func
  }

  componentDidMount() {
    this.fetchSearchResults()
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.searchQuery !== this.props.match.params.searchQuery
    ) {
      this.fetchSearchResults()
    }
  }

  fetchSearchResults() {
    this.props.getSearchResults(this.props.match.params.searchQuery)
  }

  renderResults = () => {
    if (this.props.searchResults) {
      let movieResults = []
      let tvResults = []

      this.props.searchResults.results.forEach(item => {
        if (item.media_type === 'movie') {
          movieResults.push(item)
        } else {
          tvResults.push(item)
        }
      })

      return (
        <>
          <List type='movie' name='Movies' items={movieResults} />
          <List type='tv' name='TV Shows' items={tvResults} />
        </>
      )
    }
  }

  render() {
    const searchError = <h2>Sorry, no search results found</h2>

    return (
      <div className='search-results'>
        <h2 className='search-results__header'>Search Results</h2>
        <div className='search-results__list'>
          {this.props.searchResults ? this.renderResults() : searchError}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResults: state.search.searchResults
})

export default connect(
  mapStateToProps,
  { getSearchResults }
)(SearchResults)
