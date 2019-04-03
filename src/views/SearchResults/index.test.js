import React from 'react'
import { shallow } from 'enzyme'

import { SearchResults } from './index'
import List from '../../components/List'

describe('SearchResults component unit tests', () => {
  const getSearchResults = jest.fn()
  const match = { params: { searchQuery: 'test' } }

  describe('when search results are not null', () => {
    const searchResults = {
      results: [
        {
          id: '0',
          media_type: 'movie'
        },
        {
          id: '0',
          media_type: 'tv'
        }
      ]
    }
    const props = {
      getSearchResults,
      searchResults,
      match
    }

    const searchWrapper = shallow(<SearchResults {...props} />)

    test('should render properly', () => {
      expect(searchWrapper).toMatchSnapshot()
    })

    test('should call getSearchResults fn. with `searchQuery`', () => {
      expect(getSearchResults).toHaveBeenCalledWith(match.params.searchQuery)
    })

    test('should render 2 lists', () => {
      expect(searchWrapper.find(List)).toHaveLength(2)
    })
  })

  describe('when searchResults are null', () => {
    const props = {
      getSearchResults,
      searchResults: null,
      match
    }

    const searchWrapper = shallow(<SearchResults {...props} />)

    test('should render `error/sorry-text`', () => {
      expect(searchWrapper.find('h2.sorry-text'))
    })
  })
})
