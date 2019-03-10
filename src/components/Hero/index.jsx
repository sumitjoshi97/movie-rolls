import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RatingStars from '../RatingStars'

import * as actions from '../../actions'

import './styles.scss'

class Hero extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
    backdrop: PropTypes.string,
    rating: PropTypes.number,
    summary: PropTypes.string,
    adult: PropTypes.bool,
    year: PropTypes.string,
    userId: PropTypes.string,
    favorite: PropTypes.object,
    watch: PropTypes.object,
    addToList: PropTypes.func,
    removeFromList: PropTypes.func,
    setRedirectPath: PropTypes.func
  }

  state = {
    isFavorite: false,
    isWatch: false,
    favoriteId: '',
    watchId: ''
  }

  componentDidUpdate = () => {
    if (this.props.userId) {
      if (this.props.favorite) {
        const favoriteId = this.isItemInList(this.props.favorite)
        if (favoriteId) {
          this.setState({ isFavorite: true, favoriteId })
        }
      }

      if (this.props.watch) {
        const watchId = this.isItemInList(this.props.watch)
        if (watchId) {
          this.setState({ isWatch: true, watchId })
        }
      }
    }
  }

  isItemInList = list => {
    for (let item in list) {
      if (list[item].pageId === this.props.pageId) {
        return item
      }
    }
  }

  handleList = type => {
    if (this.props.userId) {
      if (type === 'favorite') {
        this.handleFavoriteList(type)
      } else {
        this.handleWatchList(type)
      }
    } else {
      this.props.history.push('/profile/auth')
      this.props.setRedirectPath(this.props.location)
    }
  }

  handleFavoriteList = type => {
    if (!this.state.isFavorite) {
      this.addItemToList(type)
    } else {
      this.removeItemFromList(type, this.state.favoriteId)
      this.setState({ favoriteId: '' })
    }
  }

  handleWatchList = type => {
    if (!this.state.isWatch) {
      this.addItemToList(type)
    } else {
      this.removeItemFromList(type, this.state.watchId)
      this.setState({ watchId: '' })
    }
  }

  addItemToList = type => {
    const { pageId, title, poster, addToList } = this.props

    const data = {
      pageId,
      title,
      poster
    }
    addToList(type, data, this.props.userId)
    this.handleListState(type)
  }

  removeItemFromList = type => {
    const { removeFromList } = this.props

    removeFromList(type, this.state.itemId, this.props.userId)
    this.handleListState(type)
  }

  handleListState = type => {
    if (type === 'favorite') {
      this.setState({ isFavorite: !this.state.isFavorite })
    } else {
      this.setState({ isWatch: !this.state.isWatch })
    }
  }

  render() {
    const {
      title,
      poster,
      backdrop,
      rating,
      type,
      summary,
      adult,
      year
    } = this.props

    const heroBackdrop = {
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${backdrop})`
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

              {adult ? (
                <span className='hero__info__text__type__adult'>'18+'</span>
              ) : (
                ''
              )}

              <span className='hero__info__text__year'>{year}</span>
            </div>

            <p className='hero__info__text__summary'>{summary}</p>

            <div className='hero__info__text__action-btns'>
              <button
                className='hero__info__text__action-btns__favorite'
                onClick={() => this.handleList('favorite')}
              >
                {this.state.isFavorite ? 'remove from' : 'add to '} favorite
              </button>
              <button
                className='hero__info__text__action-btns__watch-later'
                onClick={() => this.handleList('watch')}
              >
                {this.state.isWatch ? 'remove from' : 'add to '} Watch Later
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.userId,
  favorite: state.database.favorite,
  watch: state.database.watch
})

const mapDispatchToProps = dispatch => ({
  addToList: (list, data, userIdId) =>
    dispatch(actions.addToList(list, data, userIdId)),

  removeFromList: (list, itemId, userIdId) =>
    dispatch(actions.removeFromList(list, itemId, userIdId)),

  setRedirectPath: path => dispatch(actions.setRedirectPath(path))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero)
