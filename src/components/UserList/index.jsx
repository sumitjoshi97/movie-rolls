import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import List from '../List'

import './styles.scss'

export default class UserList extends PureComponent {
  static propTypes = {
    list: PropTypes.object
  }

  renderItems = () => {
    const { list } = this.props

    let movieList = []
    let tvList = []

    if (list) {
      for (let item in list) {
        if (list[item].type === 'movie') {
          movieList.push(list[item])
        } else {
          tvList.push(list[item])
        }
      }

      return (
        <>
          <List name='movies' type='movie' items={movieList} />
          <List name='TV shows' type='tv' items={tvList} />
        </>
      )
    }
  }

  render() {
    return <div className='user-list'>{this.renderItems()}</div>
  }
}
