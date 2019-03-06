import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// import react components
import Hero from '../../components/Hero'
import Nav from '../../components/Nav'
import List from '../../components/List'

//import redux actions
import * as actions from '../../actions'

class ItemDetail extends Component {
  static propTypes = {
    type: PropTypes.string,
    item: PropTypes.object,
    credits: PropTypes.object,
    videos: PropTypes.object,
    fetchQueryItem: PropTypes.func.isRequired,
    fetchQueryItemDetails: PropTypes.func.isRequired,
    fetchQueryItemVideos: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchQueryItem(this.props.type, this.props.match.params.itemId)
    this.props.fetchQueryItemDetails(
      this.props.type,
      this.props.match.params.itemId
    )
    this.props.fetchQueryItemVideos(
      this.props.type,
      this.props.match.params.itemId
    )
  }

  fetchVideos = () => {
    const { item, type, fetchQueryItemVideos } = this.props
    if (item.video) {
      fetchQueryItemVideos(type, this.props.match.params.itemId)
    }
  }

  renderHero = () => {
    const { item, type } = this.props
    if (item) {
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
          year={item.release_date.split('-')[0]}
        />
      )
    }
  }

  renderLists = () => {
    if (this.props.credits) {
      return (
        <>
          <List type='cast' name='Cast' items={this.props.credits.cast} />
          {this.props.videos ? (
            <List
              type='video'
              name='videos'
              items={this.props.videos.results}
            />
          ) : null}
        </>
      )
    }
  }

  render() {
    return (
      <div className='item-details'>
        {this.renderHero()}
        <Nav options={['overview', 'similar']} />
        {this.renderLists()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  type: state.item.type,
  item: state.item.current,
  credits: state.item.credits,
  videos: state.item.videos
})

const mapDispatchToProps = dispatch => ({
  fetchQueryItem: (type, itemId) =>
    dispatch(actions.getQueryItem(type, itemId)),

  fetchQueryItemDetails: (type, itemId) =>
    dispatch(actions.getQueryItemCredits(type, itemId)),

  fetchQueryItemVideos: (type, itemId) =>
    dispatch(actions.getQueryItemVideos(type, itemId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail)
