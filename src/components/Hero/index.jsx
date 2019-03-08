import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect, withRouter } from 'react-router-dom'

import RatingStars from '../RatingStars'

import * as actions from '../../actions'

import './styles.scss'

class Hero extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
    backdrop: PropTypes.string,
    rating: PropTypes.number,
    summary: PropTypes.string,
    adult: PropTypes.bool,
    year: PropTypes.string,
    user: PropTypes.object,
    favorite: PropTypes.object,
    watch: PropTypes.object,
    addToList: PropTypes.func,
    removeFromList: PropTypes.func,
    setRedirectPath: PropTypes.func
  }

  state = {
    isFavorite: false,
    isWatch: false,
    itemId: ''
  }

  isItemInList = (type, list) => {
    for (let item in list) {
      if (item.pageId === this.props.pageId) {
        if (type === 'favorite') {
          this.setState({ isFavorite: true, itemId: item })
        } else {
          this.setState({ isWatch: true, itemId: item })
        }
        return true
      }
    }
    return false
  }

  handleList = type => {
    if (this.props.isAuth) {
      const list = type === 'favorite' ? this.props.favorite : this.props.watch

      if (this.isItemInList(type, list)) {
        this.removeFromList(type)
      } else {
        this.addToList(type)
      }
    } else {
      // this.props.setRedirectPath(this.props.location.path)
      this.props.history.push('/profile/auth')
    }
  }

  addToList = type => {
    const { pageId, title, poster, user, addToList } = this.props

    const data = {
      pageId,
      title,
      poster
    }
    addToList(type, data, user.uid)
  }

  removeFromList = type => {
    const { user, removeFromList } = this.props

    removeFromList(type, this.state.itemId, user.uid)
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
                onClick={this.handleList('favorite')}
              >
                {this.state.isFavorite ? 'remove from' : 'add to '} favorite
              </button>
              <button
                className='hero__info__text__action-btns__watch-later'
                onClick={this.handleList('watch')}
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
  user: state.auth.user,
  favorite: state.database.favorite,
  watch: state.database.watch
})

const mapDispatchToProps = dispatch => ({
  addToList: (list, data, userId) =>
    dispatch(actions.addToList(list, data, userId)),

  removeFromList: (list, itemId, userId) =>
    dispatch(actions.removeFromList(list, itemId, userId)),

  setRedirectPath: path => dispatch(actions.setRedirectPath(path))
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Hero)
)
