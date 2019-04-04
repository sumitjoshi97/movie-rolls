import React from 'react'
import { shallow } from 'enzyme'
import { Redirect } from 'react-router-dom'
import { Auth } from './index'
import AuthForm from '../../components/AuthForm'

describe('Auth view unit tests', () => {
  describe('when isAuth is false', () => {
    const props = {
      isAuth: false,
      redirectPath: '/'
    }

    const authWrapper = shallow(<Auth {...props} />)

    test('should match snapshot', () => {
      expect(authWrapper).toMatchSnapshot()
    })

    test('should render `Redirect` when isAuth is false', () => {
      expect(authWrapper.find(Redirect)).toBeTruthy()
    })
  })

  describe('when isAuth is true', () => {
    const props = {
      isAuth: false,
      redirectPath: '/'
    }

    const authWrapper = shallow(<Auth {...props} />)

    test('should render `AuthForm` when isAuth is true', () => {
      expect(authWrapper.find(AuthForm)).toBeTruthy()
    })
  })
})
