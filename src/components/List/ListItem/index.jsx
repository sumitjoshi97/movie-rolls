import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../../actions'

class ListItem extends PureComponent {
  static propTypes = {
    pageId: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    poster: PropTypes.string,
    name: PropTypes.string.isRequired,
    setType: PropTypes.func.isRequired
  }

  render() {
    const { pageId, type, poster, name, setType } = this.props

    return (
      <div className='list-item'>
        <Link to={`/details/${pageId}`} onClick={() => setType(type)}>
          <img
            src={`https://image.tmdb.org/t/p/w185/${poster}`}
            alt={name}
            className='list-item__img'
          />
          <div className='list__item__name'>{name}</div>
        </Link>
        )
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setType: type => dispatch(actions.setItemType(type))
})

export default connect(
  null,
  mapDispatchToProps
)(ListItem)
