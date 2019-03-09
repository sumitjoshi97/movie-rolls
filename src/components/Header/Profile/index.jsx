import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const Header = ({ isAuth }) => {
  const [hidden, setHidden] = useState(true)

  return (
    <>
      {isAuth ? (
        <>
          <button
            className='profile-btns'
            onClick={() => {
              hidden ? setHidden(false) : setHidden(true)
            }}
          >
            B
          </button>
          {hidden ? null : (
            <div className='profile-btns__list'>
              <button className='profile-btns__list__favorite'>Favorite</button>
              <button className='profile-btns__list__watch'>watch later</button>
              <button className='profile-btns__list__logout'>logout</button>
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
