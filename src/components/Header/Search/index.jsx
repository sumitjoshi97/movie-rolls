import React from 'react'
import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline'

import './styles.scss'

const styles = {
  inputStyle: {
    width: '30rem',
    padding: '0.5rem 3rem 0.5rem 1.4rem',
    backgroundColor: '#e6e6e6'
  },
  btnStyle: {
    position: 'absolute',
    right: '0.6rem'
  }
}

const Search = ({ isActive, handleInput, handleSearch }) => (
  <div className='search'>
    <input
      type='text'
      className='search__input'
      style={isActive ? styles.inputStyle : null}
      onChange={handleInput}
    />
    <button
      className='search__btn'
      onClick={handleSearch}
      style={isActive ? styles.btnStyle : null}
    >
      <IosSearchOutline fontSize='18px' color={isActive ? '#000' : '#fff'} />
    </button>
  </div>
)

export default Search
