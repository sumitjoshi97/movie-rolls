import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import UserList from '../../components/UserList'

import './styles.scss'

export class Favorites extends Component {
  static propTypes = {
    favorites: PropTypes.object
  }

  render() {
    return (
      <div className='favorite'>
        <h2 className='favorite__header'>my favorites</h2>
        {this.props.favorite ? (
          <UserList list={this.props.favorite} text='favorite' />
        ) : (
          <h2 className='sorry-text'>
            You don't have any yet, start adding now
          </h2>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  favorite: state.database.favorite
})

export default connect(mapStateToProps)(Favorites)
