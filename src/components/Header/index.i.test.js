import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import { Header } from './index'

describe('Header component integration tests', () => {
  const logout = jest.fn()
  const userId = '0'
  const history = {
    push: jest.fn()
  }

  const props = { logout, userId, history }

  const headerWrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <Header {...props} />
    </MemoryRouter>
  )

  test('should push history on search', () => {
    const searchText = 'test search'

    const searchBtn = headerWrapper.find('.search__btn')
    searchBtn.simulate('click')

    headerWrapper.find('.search__input').simulate('change', {
      target: { value: searchText }
    })

    searchBtn.simulate('click')

    expect(history.push).toHaveBeenCalledWith(`/search-results/${searchText}`)
  })
})
