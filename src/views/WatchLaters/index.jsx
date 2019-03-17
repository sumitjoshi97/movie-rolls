import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import UserList from '../../components/UserList'

import './styles.scss'

class WatchLaters extends Component {
  static propTypes = {
    watch: PropTypes.object
  }

  render() {
    return (
      <div className='watch-later'>
        <h2 className='watch-later__header'>my watchlist</h2>
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
