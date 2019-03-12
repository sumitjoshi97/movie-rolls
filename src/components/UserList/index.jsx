import React, { Component } from 'react'

import ActionBtn from './ActionBtn'
import UserListItem from './UserListItem'

import './styles.scss'

export default class UserList extends Component {
  state = {
    active: 'movie'
  }

  handleType = active => {
    this.setState({ active })
  }

  renderItems = () => {
    const { active } = this.state
    const { list } = this.props

    let renderList = []

    for (let item in list) {
      if (list[item].type === active) {
        renderList.push(list[item])
      }
    }

    return renderList.map(item => (
      <UserListItem
        key={item.pageId}
        pageId={item.pageId}
        name={item.title}
        poster={item.poster}
      />
    ))
  }

  render() {
    return (
      <div className='user-list'>
        <div className='user-list__action-btns'>
          <ActionBtn
            text={this.props.text}
            name='movie'
            active={this.state.active}
            onclick={this.handleType}
          />
          <ActionBtn
            text={this.props.text}
            name='tv'
            active={this.state.active}
            onclick={this.handleType}
          />
        </div>

        <div className='user-list__items'>{this.renderItems()}</div>
      </div>
    )
  }
}
