import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../actions'

import './styles.scss'

export class AuthForm extends Component {
  static propTypes = {
    signupUser: PropTypes.func,
    loginUserWithEmail: PropTypes.func,
    loginUserWithSocial: PropTypes.func
  }

  state = {
    email: '',
    password: '',
    active: 'login'
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleActiveAuth = () => {
    const { active } = this.state
    if (active === 'login') {
      this.setState({
        active: 'signup'
      })
    } else {
      this.setState({
        active: 'login'
      })
    }
  }

  authWithEmailPassword = e => {
    e.preventDefault()
    const { email, password, active } = this.state
    const { signupUser, loginUserWithEmail } = this.props

    if (active === 'login') {
      loginUserWithEmail(email, password)
    } else {
      signupUser(email, password)
    }
  }

  render() {
    const { active } = this.state
    return (
      <div className='auth-form'>
        <div className='auth-form__header'>
          <h3>{active === 'login' ? 'Log in' : 'Sign up'} to see more</h3>
        </div>

        <form className='auth-form__form'>
          <input
            type='email'
            name='email'
            className='auth-form__form__input'
            placeholder='Email address'
            value={this.state.email}
            onChange={this.handleInput}
          />

          <input
            type='password'
            name='password'
            className='auth-form__form__input'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleInput}
          />

          <input
            type='submit'
            className='auth-form__form__submit action-btn'
            value={active === 'login' ? 'Log in' : 'Sign up'}
            onClick={this.authWithEmailPassword}
          />
        </form>

        <span>Or</span>

        <div className='auth-form__social-btns'>
          <button
            className='auth-form__social-btns__google action-btn'
            onClick={this.props.loginUserWithSocial}
          >
            Continue with Google
          </button>
        </div>

        <button className='auth-form__active' onClick={this.handleActiveAuth}>
          {active === 'login'
            ? 'Not on Movie Rolls? Sign up'
            : 'Already a member? Login'}
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signupUser: (email, password) =>
    dispatch(actions.createUser(email, password)),

  loginUserWithEmail: (email, password) =>
    dispatch(actions.loginUserWithEmailPassword(email, password)),

  loginUserWithSocial: () => dispatch(actions.loginUserWithSocial())
})

export default connect(
  null,
  mapDispatchToProps
)(AuthForm)
