import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import AuthForm from '../../components/AuthForm'

import './styles.scss'

class Auth extends Component {
  render() {
    const isRedirect = this.props.isAuthenticated ? <Redirect to='/' /> : null

    return (
      <div className='auth'>
        {isRedirect}
        <AuthForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.user !== null
})

export default connect(mapStateToProps)(Auth)
