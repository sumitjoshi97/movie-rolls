import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
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
    if (this.state.search && this.state.text) {
      this.props.history.push(`/search-results/${this.state.text}`)
      this.setState({ text: '' })
    }
    this.setState(prevState => ({
      search: !prevState.search
    }))
  }

  render() {
    const isAuth = this.props.userId !== undefined
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
            <Profile isAuth={isAuth} />
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.userId
})

export default connect(mapStateToProps)(withRouter(Header))
