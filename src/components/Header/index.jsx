import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import PhoneSearch from './PhoneSearch'
import Profile from './Profile'
import Search from './Search'

import { logout } from '../../actions'

import './styles.scss'

export class Header extends PureComponent {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
  }

  state = {
    text: '',
    search: false,
    size: 'wide',
  }

  componentDidMount () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    if (window.innerWidth <= 600) {
      this.setState({ size: 'phone' })
    } else {
      this.setState({ size: 'wide' })
    }
    this.forceUpdate()
  }

  handleInput = e => {
    this.setState({
      text: e.target.value,
    })
  }

  handleSearch = () => {
    if (this.state.search && this.state.text) {
      this.props.history.push(`/search-results/${this.state.text}`)
      this.setState({ text: '' })
    }
    this.setState(prevState => ({
      search: !prevState.search,
    }))
  }

  handleLogout = () => {
    this.props.logout()
    this.props.history.push('/')
  }

  render () {
    return (
      <div className='header' style={{ backgroundColor: this.props.color }}>
        <ul className='header__left'>
          <li className='header__left__brand'>
            <Link to='/'>Movie Rolls</Link>
          </li>

          <li className='header__left__search'>
            {
              this.state.size === 'wide' ? <Search
                value={this.state.text}
                isActive={this.state.search}
                handleInput={this.handleInput}
                handleSearch={this.handleSearch}
              /> :
              <PhoneSearch
                value={this.state.text}
                isActive={this.state.search}
                handleInput={this.handleInput}
                handleSearch={this.handleSearch}
              />}
          </li>

          <li className='header__left__browse'>
            <Link to='/discover'>discover</Link>
          </li>
        </ul>
        <ul className='header__right'>
          <li className='header__right__profile'>
            <Profile isAuth={this.props.isAuth} logout={this.handleLogout} />
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.userId !== null,
})

export default connect(mapStateToProps, { logout })(withRouter(Header))
