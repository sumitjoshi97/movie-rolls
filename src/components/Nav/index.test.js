import React from 'react'
import { shallow } from 'enzyme'

import Nav from './index'
import NavItem from './NavItem'

describe('Nav component unit tests', () => {
  const options = [
    {
      type: 'type1',
      name: 'type1'
    },
    {
      type: 'type2',
      name: 'type2'
    }
  ]

  const handleNav = jest.fn()

  const props = { options, handleNav }

  const navWrapper = shallow(<Nav {...props} />)

  test('should render properly', () => {
    expect(navWrapper).toMatchSnapshot()
  })

  test('should render 2 nav-items', () => {
    expect(navWrapper.find(NavItem)).toHaveLength(2)
  })
})
