import React from 'react'
import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline'
import PropTypes from 'prop-types'

import './styles.scss'

const PhoneSearch = ({ isActive, ...props }) => (
  <div className='phone-search'>
    <button className='search__btn' onClick={props.handleSearch}>
      <IosSearchOutline fontSize='18px' color={isActive ? '#000' : '#fff'} />
    </button>
    {isActive ? (
      <>
        <div className='phone-search__backdrop'>
          <div className='phone-search__form'>
            <input
              type='text'
              className='phone-search__form__input'
              onChange={props.handleInput}
            />
            <button
              className='phone-search__form__btn'
              onClick={props.handleSearch}
            >
              <IosSearchOutline
                fontSize='18px'
                color={isActive ? '#000' : '#fff'}
              />
            </button>
          </div>
        </div>
      </>
    ) : null}
  </div>
)

PhoneSearch.propTypes = {
  isActive: PropTypes.bool,
  handleInput: PropTypes.func,
  handleSearch: PropTypes.func
}

export default PhoneSearch
