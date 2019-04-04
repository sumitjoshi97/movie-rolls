import React from 'react'
import { mount } from 'enzyme'

import Nav from './index'

describe('Nav component integration tests', () => {
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

  const navWrapper = mount(<Nav {...props} />)

  test('should render properly', () => {
    expect(navWrapper).toMatchSnapshot()
  })

  test('should change state by clicking on nav-tem', () => {
    navWrapper.find('.type2').simulate('click')

    expect(navWrapper.state().isActive).toEqual([false, true])
  })
})
