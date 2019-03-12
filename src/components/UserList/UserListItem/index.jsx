import React from 'react'
import { Link } from 'react-router-dom'

const UserListItem = ({ pageId, name, poster }) => {
  return (
    <div className='user-list-item'>
      <Link to={`/details/${pageId}`}>
        <img src={`https://image.tmdb.org/t/p/w185/${poster}`} alt={name} />
        <p>{name}</p>
      </Link>
    </div>
  )
}

export default UserListItem
