import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserList from '../../components/UserList'

import * as actions from '../../actions'

class WatchLaters extends Component {
  render() {
    return (
      <div className='user-list'>
        <UserList list={this.props.watch} text='watch later' />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  watch: state.database.watch
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchLaters)
