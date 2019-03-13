import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setItemType } from '../../../actions'

import './styles.scss'

const UserListItem = ({ pageId, name, poster, type, ...props }) => {
  return (
    <div className='user-list-item'>
      <Link to={`/details/${pageId}`} onClick={() => props.setItemType(type)}>
        <img
          src={`https://image.tmdb.org/t/p/w185/${poster}`}
          alt={name}
          className='user-list-item__img'
        />
        <p className='user-list-item__name'>{name}</p>
      </Link>
    </div>
  )
}

export default connect(
  null,
  { setItemType }
)(UserListItem)
