import React from 'react'
import { shallow } from 'enzyme'

import { Favorites } from './index'
import UserList from '../../components/UserList'

describe('Favorites view unit tests', () => {
  describe('when favorites is null', () => {
    const props = {
      favorites: null
    }

    const favoritesWrapper = shallow(<Favorites {...props} />)

    test('should render properly', () => {
      expect(favoritesWrapper).toMatchSnapshot()
    })

    test('should render sorry-text', () => {
      expect(favoritesWrapper.find('div.sorry-text')).toBeTruthy()
    })
  })

  describe('when favorites is not null', () => {
    const props = {
      favorites: {
        0: {
          id: '0'
        }
      }
    }
    const favoritesWrapper = shallow(<Favorites {...props} />)
    test('should render UserList component', () => {
      expect(
        favoritesWrapper.find({ list: props.favorites }).find(UserList)
      ).toBeTruthy()
    })
  })
})
