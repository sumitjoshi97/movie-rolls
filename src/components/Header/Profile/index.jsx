import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './styles.scss'

const Profile = ({ isAuth, profileURL, ...props }) => {
  const [hidden, setHidden] = useState(true)

  return (
    <>
      {isAuth ? (
        <div
          className='profile'
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}>
          <div className='profile-btn'>
            <img
              src={
                profileURL ? profileURL : require('../../../assets/profile.png')
              }
              className='profile-btn__img'
              alt=''
            />
          </div>

          {/* profile options list - favorites, watch later list , logout */}
          {hidden ? null : (
            <div className='profile-btn__list'>
              <Link to='/profile/favorites'>
                <button className='profile-btn__list__favorite'>
                  favorite
                </button>
              </Link>
              <Link to='/profile/watch-later'>
                <button className='profile-btn__list__watch'>
                  watch later
                </button>
              </Link>
              <button
                className='profile-btn__list__logout'
                onClick={props.logout}>
                logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link to='/auth' className='login'>
          Login
        </Link>
      )}
    </>
  )
}

Profile.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  profileURL: PropTypes.string,
  logout: PropTypes.func,
}

export default Profile
