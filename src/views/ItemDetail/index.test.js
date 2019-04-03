import React from 'react'
import { shallow } from 'enzyme'

import { ItemDetail } from './index'
import Hero from '../../components/Hero'
import List from '../../components/List'

describe('Item Details unit tests', () => {
  const match = {
    params: {
      itemId: '01'
    }
  }
  const type = 'movie'
  const item = {
    id: '01',
    title: 'test',
    poster_path: null,
    backdrop_path: null,
    vote_average: 4,
    type: 'movie',
    summary: 'test summary',
    adult: false,
    release_date: '2019-15-1'
  }
  const credits = { cast: [{ id: '01' }] }
  const videos = null
  const similar = {
    results: [{ id: '02' }]
  }
  const fetchQueryItem = jest.fn()
  const fetchQueryItemDetails = jest.fn()
  const fetchQueryItemVideos = jest.fn()
  const fetchSimilarItems = jest.fn()
  const setItemClear = jest.fn()

  const props = {
    match,
    type,
    item,
    credits,
    videos,
    similar,
    fetchQueryItem,
    fetchQueryItemDetails,
    fetchQueryItemVideos,
    fetchSimilarItems,
    setItemClear
  }

  const itemDetailWrapper = shallow(<ItemDetail {...props} />)

  test('should render properly', () => {
    expect(itemDetailWrapper).toMatchSnapshot()
  })

  test('should render hero of type `movie`', () => {
    expect(itemDetailWrapper.find({ type: 'movie' }).find(Hero)).toBeTruthy()
  })

  test('should render list of cast', () => {
    expect(itemDetailWrapper.find({ type: 'cast' }).find(List)).toBeTruthy()
  })

  test('should call fetchQueryItem fn', () => {
    expect(fetchQueryItem).toHaveBeenCalledWith(type, match.params.itemId)
  })
  test('should call fetchQueryItemDetails fn', () => {
    expect(fetchQueryItemDetails).toHaveBeenCalledWith(
      type,
      match.params.itemId
    )
  })
  test('should call fetchQueryItemVideos fn', () => {
    expect(fetchQueryItemVideos).toHaveBeenCalledWith(type, match.params.itemId)
  })
  test('should call fetchSimilar fn', () => {
    expect(fetchSimilarItems).toHaveBeenCalledWith(type, match.params.itemId)
  })
})
