import React from 'react'
import { shallow } from 'enzyme'

import { WatchLaters } from './index'
import UserList from '../../components/UserList'

describe('WatchLatersview unit tests', () => {
  describe('when watch-laters list is null', () => {
    const props = {
      watch: null
    }

    const watchLatersWrapper = shallow(<WatchLaters {...props} />)

    test('should render properly', () => {
      expect(watchLatersWrapper).toMatchSnapshot()
    })

    test('should render sorry-text', () => {
      expect(watchLatersWrapper.find('div.sorry-text')).toBeTruthy()
    })
  })

  describe('when WatchLatersis not null', () => {
    const props = {
      watch: {
        0: {
          id: '0'
        }
      }
    }
    const watchLatersWrapper = shallow(<WatchLaters {...props} />)
    test('should render UserList component', () => {
      expect(
        watchLatersWrapper.find({ list: props.watch }).find(UserList)
      ).toBeTruthy()
    })
  })
})
