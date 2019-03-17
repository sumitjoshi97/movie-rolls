import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import UserList from '../../components/UserList'

import './styles.scss'

class Favorites extends Component {
  static propTypes = {
    favorites: PropTypes.object
  }

  render() {
    return (
      <div className='favorite'>
        <h2 className='favorite__header'>my favorites</h2>
        <UserList
          list={this.props.favorite}
          text='favorite'
          history={this.props.history}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  favorite: state.database.favorite
})

export default connect(mapStateToProps)(Favorites)
