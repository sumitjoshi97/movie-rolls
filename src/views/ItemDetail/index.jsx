import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

// import react components
import Hero from '../../components/Hero'
import Nav from '../../components/Nav'
import List from '../../components/List'

//import redux actions
import * as actions from '../../actions'

import './style.scss'

export class ItemDetail extends Component {
  static propTypes = {
    type: PropTypes.string,
    item: PropTypes.object,
    credits: PropTypes.object,
    videos: PropTypes.object,
    similar: PropTypes.object,
    fetchQueryItem: PropTypes.func.isRequired,
    fetchQueryItemDetails: PropTypes.func.isRequired,
    fetchQueryItemVideos: PropTypes.func.isRequired,
    fetchSimilarItems: PropTypes.func.isRequired,
    setItemClear: PropTypes.func.isRequired,
  }

  state = {
    currentType: 'overview',
  }

  componentDidMount() {
    this.fetchItem()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.itemId !== this.props.match.params.itemId) {
      this.fetchItem()
    }
  }
  componentWillUnmount() {
    this.props.setItemClear()
  }

  fetchItem = () => {
    const { type, match } = this.props
    const itemId = match.params.itemId

    this.props.fetchQueryItem(type, itemId)
    this.props.fetchQueryItemDetails(type, itemId)
    this.props.fetchQueryItemVideos(type, itemId)
    this.props.fetchSimilarItems(type, itemId)
  }

  renderHero = () => {
    const { item, type } = this.props

    if (item) {
      if (type === 'movie') {
        return (
          <Hero
            key={item.id}
            pageId={item.id}
            title={item.title}
            poster={item.poster_path}
            backdrop={item.backdrop_path}
            rating={item.vote_average}
            type={type}
            summary={item.overview}
            adult={item.adult}
            year={item.release_date.split('-')[0] || ''}
          />
        )
      } else {
        return (
          <Hero
            key={item.id}
            pageId={item.id}
            title={item.name}
            poster={item.poster_path}
            backdrop={item.backdrop_path}
            rating={item.vote_average}
            type={type}
            summary={item.overview}
            year={item.first_air_date.split('-')[0] || ''}
          />
        )
      }
    }
  }

  renderLists = () => {
    if (this.state.currentType === 'overview') {
      if (this.props.credits) {
        return (
          <>
            <List type='cast' name='Cast' items={this.props.credits.cast} />
            {this.props.videos &&
              (this.props.videos.results.length > 0 ? (
                <List
                  type='video'
                  name='videos'
                  items={this.props.videos.results}
                />
              ) : null)}
          </>
        )
      }
    } else {
      return this.props.similar.results.length > 0 ? (
        <List
          type={this.props.type}
          name='Similar'
          items={this.props.similar.results}
        />
      ) : (
        <h3 className='sorry-text'>
          Sorry, we can't find anything looking similar
        </h3>
      )
    }
  }

  handleNav = itemType => {
    this.setState({
      currentType: itemType,
    })
  }

  render() {
    return (
      <div className='item-details'>
        <div className='item-details__hero'>
          {this.renderHero()}
          <Nav
            handleNav={this.handleNav}
            options={[
              { type: 'overview', name: 'overview' },
              { type: 'similar', name: 'more like this' },
            ]}
          />
        </div>
        <div className='item-details__lists'>{this.renderLists()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  type: state.item.type,
  item: state.item.current,
  credits: state.item.credits,
  videos: state.item.videos,
  similar: state.item.similar,
})

const mapDispatchToProps = dispatch => ({
  fetchQueryItem: (type, itemId) =>
    dispatch(actions.getQueryItem(type, itemId)),

  fetchQueryItemDetails: (type, itemId) =>
    dispatch(actions.getQueryItemCredits(type, itemId)),

  fetchQueryItemVideos: (type, itemId) =>
    dispatch(actions.getQueryItemVideos(type, itemId)),

  fetchSimilarItems: (type, itemId) =>
    dispatch(actions.getSimilarItems(type, itemId)),

  setItemClear: () => dispatch(actions.setItemClear()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ItemDetail))
