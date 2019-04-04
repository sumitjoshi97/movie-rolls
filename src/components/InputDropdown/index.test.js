import React from 'react'
import { shallow } from 'enzyme'

import InputDropdown from './index'

describe('InputDropdown component unit test', () => {
  const handleDropdown = jest.fn()
  const name = 'year'
  const options = [
    { label: '2019', value: '2019' },
    { label: '2018', value: '2018' }
  ]
  const value = {
    label: '2019',
    value: '2019'
  }

  const props = {
    name,
    options,
    value,
    handleDropdown
  }

  const inputDropdownWrapper = shallow(<InputDropdown {...props} />)

  test('will render properly', () => {
    expect(inputDropdownWrapper).toMatchSnapshot()
  })

  test('clicking on list opens dropdown', () => {
    inputDropdownWrapper.find('.input-dropdown__header').simulate('click')
    expect(inputDropdownWrapper.state().isActive).toEqual(true)
  })

  test('clicking on dropdown option calls callback fn. with options', () => {
    inputDropdownWrapper
      .find('.input-dropdown__list__option')
      .at(1)
      .simulate('click')

    expect(handleDropdown).toHaveBeenCalledWith(name, options[1])
  })
})
