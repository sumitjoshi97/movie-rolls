import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.scss'

class Auth extends Component {
  render() {
    return (
      <div className='auth'>
        <div className='auth__box'>
          Movie rolls
          <div className='auth__box__action-btn'>
            <button className='auth__box__action-btn__login'>Login</button>
            <button className='auth__box__action-btn__guest'>
              Browse as Guest
            </button>
          </div>
        </div>
        <div className='auth__terms'>
          * browsing as guest has limited functionality
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  null,
  mapDispatchToProps
)(Auth)
