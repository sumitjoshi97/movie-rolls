import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthForm from '../../components/AuthForm'

import './styles.scss'

export class Auth extends Component {
  static propTypes = {
    isAuth: PropTypes.bool.isRequired,
    redirectPath: PropTypes.string.isRequired
  }

  render() {
    const isRedirect = this.props.isAuth ? (
      <Redirect to={this.props.redirectPath} />
    ) : null

    return (
      <div className='auth'>
        <div className='auth__logo'>movie rolls</div>

        {isRedirect}
        <AuthForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.userId !== '',
  redirectPath: state.auth.redirectPath
})

export default connect(mapStateToProps)(Auth)
