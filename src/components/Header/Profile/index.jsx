import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const Header = ({ isAuth, profileURL }) => {
  const [hidden, setHidden] = useState(true)

  return (
    <>
      {isAuth ? (
        <>
          <button
            className='profile-btn'
            onClick={() => {
              hidden ? setHidden(false) : setHidden(true)
            }}
          >
            <img
              src={
                profileURL ? profileURL : require('../../../assets/profile.png')
              }
              className='profile-btn__img'
              alt=''
            />
          </button>
          {hidden ? null : (
            <div className='profile-btn__list'>
              <button className='profile-btn__list__favorite'>
                <Link to='/profile/favorites'>Favorite</Link>
              </button>
              <button className='profile-btn__list__watch'>
                <Link to='profile/watch-later'>watch later</Link>
              </button>
              <button className='profile-btn__list__logout'>logout</button>
            </div>
          )}
        </>
      ) : (
        <Link to='/profile/auth'>Login</Link>
      )}
    </>
  )
}

export default Header
