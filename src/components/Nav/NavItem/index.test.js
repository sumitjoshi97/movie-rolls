import React from 'react'
import { shallow } from 'enzyme'

import NavItem from './index'

describe('Nav Items unit tests', () => {
  const setActive = jest.fn()
  const handleNav = jest.fn()

  const index = 0
  const name = 'test nav'
  const type = 'test'
  const isActive = true

  const props = {
    index,
    name,
    type,
    isActive,
    setActive,
    handleNav
  }

  const navItemWrapper = shallow(<NavItem {...props} />)
  test('should render properly', () => {
    expect(navItemWrapper).toMatchSnapshot()
  })

  test('should render a nav-item with name - `test nav`', () => {
    expect(navItemWrapper.find('.nav-item').text()).toBe(name)
  })
})
