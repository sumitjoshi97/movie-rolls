import React from 'react'
import { shallow } from 'enzyme'

import UserList from './index'

describe('UserList component unit tests', () => {
  const list = {
    0: {
      type: 'movie',
      id: '01'
    },
    1: {
      type: 'tv',
      id: '02'
    }
  }

  const props = { list }

  const userListWrapper = shallow(<UserList {...props} />)

  test('should render properly', () => {
    expect(userListWrapper).toMatchSnapshot()
  })

  test('should have a movie list', () => {
    expect(userListWrapper.find({ items: [list[0]] })).toHaveLength(1)
  })

  test('should have a tv list', () => {
    expect(userListWrapper.find({ items: [list[1]] })).toHaveLength(1)
  })
})
