import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../../actions'

export const ListItem = ({ pageId, type, poster, name, setType }) => (
  <div className='list-item'>
    <Link to={`/details/${pageId}`} onClick={() => setType(type)}>
      <img
        src={
          poster
            ? `https://image.tmdb.org/t/p/w185/${poster}`
            : require('../../../assets/placeholder.png')
        }
        alt={name}
        className='list-item__img'
      />
      <div className='list-item__name'>{name}</div>
    </Link>
  </div>
)

ListItem.propTypes = {
  pageId: PropTypes.number,
  type: PropTypes.string,
  poster: PropTypes.string,
  name: PropTypes.string,
  setType: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setType: type => dispatch(actions.setItemType(type))
})

export default connect(
  null,
  mapDispatchToProps
)(ListItem)
