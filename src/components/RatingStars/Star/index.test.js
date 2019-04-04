import React from 'react'
import { shallow } from 'enzyme'

import MdStar from 'react-ionicons/lib/MdStar'
import MdStarOutline from 'react-ionicons/lib/MdStarOutline'
import MdStarHalf from 'react-ionicons/lib/MdStarHalf'
import Star from './index'

describe('Star component unit test', () => {
  test('should render properly', () => {
    const wrapper = shallow(<Star type='full' />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should render a full star', () => {
    const fullWrapper = shallow(<Star type='full' />)

    expect(fullWrapper.find(MdStar)).toHaveLength(1)
  })

  test('should render a half star', () => {
    const halfWrapper = shallow(<Star type='half' />)

    expect(halfWrapper.find(MdStarHalf)).toHaveLength(1)
  })

  test('should render a blank star', () => {
    const blankWrapper = shallow(<Star type='blank' />)

    expect(blankWrapper.find(MdStarOutline)).toHaveLength(1)
  })
})
