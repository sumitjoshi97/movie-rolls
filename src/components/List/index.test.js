import React from 'react'
import { shallow } from 'enzyme'

import List from './index'

describe('list unit tests', () => {
  const type = 'movie'
  const items = [
    {
      id: '01',
      title: 'test',
      poster_path: 'test_path.png'
    }
  ]
  const name = 'test title'

  const props = {
    type,
    items,
    name
  }

  const listWrapper = shallow(<List {...props} />)
  test('should render properly', () => {
    expect(listWrapper).toMatchSnapshot()
  })

  test('should have header of title - `test title`', () => {
    expect(listWrapper.find('.list__header').text()).toEqual(name)
  })

  test('should render a ListItem component of type `movie`', () => {
    expect(listWrapper.find({ type: 'movie' })).toHaveLength(1)
  })

  test('should render a ListItem component of type `tv`', () => {
    const props = {
      type: 'tv',
      items,
      name
    }
    const listWrapper = shallow(<List {...props} />)
    expect(listWrapper.find({ type: 'tv' })).toHaveLength(1)
  })

  test('should render a ListItem component of type `video`', () => {
    const props = {
      type: 'video',
      items: [
        {
          id: '01',
          name: 'test video',
          key: 'video',
          category: 'trailer'
        }
      ],
      name
    }
    const listWrapper = shallow(<List {...props} />)
    expect(listWrapper.find({ name: 'test video' })).toHaveLength(1)
  })

  test('should render a ListItem component of type `cast`', () => {
    const props = {
      type: 'cast',
      items: [
        {
          id: '01',
          name: 'test cast',
          poster: 'test_path.png',
          role: 'test role'
        }
      ],
      name
    }
    const listWrapper = shallow(<List {...props} />)
    expect(listWrapper.find({ name: 'test cast' })).toHaveLength(1)
  })
})
