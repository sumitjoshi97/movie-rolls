import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Search from './Search'
import Profile from './Profile'

import './styles.scss'

class Header extends Component {
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
    if (this.state.search) {
      //api call to search
      this.setState({ text: '' })
    }
    this.setState(prevState => ({
      search: !prevState.search
    }))
  }

  render() {
    const isAuth = this.props.user !== null

    return (
      <div className='header' style={{ backgroundColor: this.props.color }}>
        <ul className='header__left'>
          <li className='header__left__brand'>Movie Rolls</li>

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
            <Profile isAuth={isAuth} />
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
