import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Search from './Search'
import Profile from './Profile'

import { logout } from '../../actions'

import './styles.scss'

class Header extends Component {
  static propsTypes = {
    logout: PropTypes.func.isRequired,
    userId: PropTypes.string
  }

  state = {
    text: '',
    search: false
  }

  handleInput = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSearch = () => {
    if (this.state.search && this.state.text) {
      this.props.history.push(`/search-results/${this.state.text}`)
      this.setState({ text: '' })
    }
    this.setState(prevState => ({
      search: !prevState.search
    }))
  }

  handleLogout = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  render() {
    const isAuth = this.props.userId
    return (
      <div className='header' style={{ backgroundColor: this.props.color }}>
        <ul className='header__left'>
          <li className='header__left__brand'>
            <Link to='/'>Movie Rolls</Link>
          </li>

          <li className='header__left__search'>
            <Search
              value={this.state.text}
              isActive={this.state.search}
              handleInput={this.handleInput}
              handleSearch={this.handleSearch}
            />
          </li>

          <li className='header__left__browse'>
            <Link to='/discover'>discover</Link>
          </li>
        </ul>
        <ul className='header__right'>
          <li className='header__right__profile'>
            <Profile isAuth={isAuth} logout={this.handleLogout} />
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.userId
})

export default connect(
  mapStateToProps,
  { logout }
)(withRouter(Header))
