import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

import './styles.scss'

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
    active: 'login',
    redirect: false
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

  authWithEmailPassword = async e => {
    e.preventDefault()
    const { email, password, active } = this.state
    const { signupUser, loginUserWithEmail, fetchUser } = this.props

    if (active === 'login') {
      await loginUserWithEmail(email, password)
      await fetchUser()

      if (this.props.user) {
        await this.props.fetchList('favorite', this.props.user.uid)
        await this.props.fetchList('watch', this.props.user.uid)
      }
    } else {
      await signupUser(email, password)
      await fetchUser()
      if (this.props.user) {
        await this.props.fetchList('favorite', this.props.user.uid)
        await this.props.fetchList('watch', this.props.user.uid)
      }
    }
  }

  authWithSocial = async provider => {
    const { user } = this.props
    await this.props.loginUserWithSocial(provider)
    await this.props.fetchUser()
    if (user) {
      await this.props.fetchList('favorite', user.uid)
      await this.props.fetchList('watch', user.uid)
    }
  }

  render() {
    const { active } = this.state
    return (
      <div className='auth-form'>
        <div className='auth-form__logo'>
          <span className='auth-form__logo__main'>M</span>
          <span className='auth-form__logo__sub'>r</span>
        </div>
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
            onClick={() => this.authWithSocial('google')}
          >
            Continue with Google
          </button>
          <button
            className='auth-form__social-btns__facebook action-btn'
            onClick={() => this.authWithSocial('facebook')}
          >
            Continue with Facebook
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

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  signupUser: (email, password) =>
    dispatch(actions.createUser(email, password)),

  loginUserWithEmail: (email, password) =>
    dispatch(actions.loginUserWithEmailPassword(email, password)),

  loginUserWithSocial: provider =>
    dispatch(actions.loginUserWithSocial(provider)),

  fetchUser: () => dispatch(actions.fetchUser()),
  fetchList: (type, userId) => dispatch(actions.fetchList(type, userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm)
