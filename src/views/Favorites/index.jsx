import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserList from '../../components/UserList'

class Favorites extends Component {
  render() {
    return (
      <div className='user-list'>
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
