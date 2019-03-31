import React from 'react'
import { mount } from 'enzyme'

import { Home } from './index'

describe('home integration test', () => {
  const fetchCurrentMovies = jest.fn()
  const fetchPopularMovies = jest.fn()
  const fetchUpcomingMovies = jest.fn()
  const fetchTopMovies = jest.fn()

  const fetchCurrentShows = jest.fn()
  const fetchPopularShows = jest.fn()
  const fetchAiringShows = jest.fn()
  const fetchTopShows = jest.fn()

  const currentMovies = { results: [] }
  const currentShows = { results: [] }
  const topShows = { results: [] }
  const airingShows = { results: [] }
  const popularShows = { results: [] }

  const props = {
    fetchCurrentMovies,
    fetchPopularMovies,
    fetchUpcomingMovies,
    fetchTopMovies,
    fetchCurrentShows,
    fetchPopularShows,
    fetchAiringShows,
    fetchTopShows,
    currentMovies,
    currentShows,
    topShows,
    airingShows,
    popularShows
  }

  const homeWrapper = mount(<Home {...props} />)

  test('clicking tv shows in nav change lists to tv shows', async () => {
    homeWrapper.find('.tv').simulate('click')

    const list = homeWrapper.find('.list').at(0)

    expect(list.find('.list__header').text()).toEqual('airing today')
  })
})
