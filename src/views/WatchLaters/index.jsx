import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserList from '../../components/UserList'

class WatchLaters extends Component {
  render() {
    return (
      <div className='user-list'>
        <UserList
          list={this.props.watch}
          text='watch later'
          history={this.props.history}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  watch: state.database.watch
})

export default connect(mapStateToProps)(WatchLaters)
