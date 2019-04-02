import React from 'react'
import { shallow } from 'enzyme'

import { Hero } from './index'

describe('Hero component unit test', () => {
  const addToList = jest.fn()
  const removeFromList = jest.fn()
  const setRedirectPath = jest.fn()

  const type = 'movie'
  const pageId = '0'
  const title = 'some'
  const poster = null
  const backdrop = null
  const rating = 4
  const year = '2019'
  const userId = '012'
  const favorite = {}
  const watch = {}

  const props = {
    type,
    pageId,
    title,
    poster,
    backdrop,
    rating,
    year,
    userId,
    favorite,
    watch,
    addToList,
    removeFromList,
    setRedirectPath
  }

  const heroWrapper = shallow(<Hero {...props} />)

  test('will render properly', () => {
    expect(heroWrapper).toMatchSnapshot()
  })

  test('clicking favorite btn calls addToList fn for favorite list', () => {
    const listData = {
      pageId,
      title,
      type,
      poster
    }

    heroWrapper
      .find('.hero__info__text__action-btns__favorite')
      .simulate('click')
    expect(addToList).toHaveBeenCalledWith('favorite', listData, userId)
  })

  test('clicking watch-later btn calls addToList fn for watchlist', () => {
    const listData = {
      pageId,
      title,
      type,
      poster
    }

    heroWrapper
      .find('.hero__info__text__action-btns__watch-later')
      .simulate('click')
    expect(addToList).toHaveBeenCalledWith('watch', listData, userId)
  })
})
