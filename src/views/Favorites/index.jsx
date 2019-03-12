import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import UserList from '../../components/UserList'

class Favorites extends PureComponent {
  render() {
    return (
      <div className='user-list'>
        <UserList list={this.props.favorite} text='favorite' />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  favorite: state.database.favorite
})

export default connect(mapStateToProps)(Favorites)
