import React from 'react'
import { shallow } from 'enzyme'

import { AuthForm } from './index'

describe('AuthForm unit test', () => {
  const signupUser = jest.fn()
  const loginUserWithEmail = jest.fn()
  const loginUserWithSocial = jest.fn()

  const props = {
    signupUser,
    loginUserWithEmail,
    loginUserWithSocial
  }

  const authFormWrapper = shallow(<AuthForm {...props} />)

  test('should render properly', () => {
    expect(authFormWrapper).toMatchSnapshot()
  })

  test('clicking signup button changes auth to signup', () => {
    authFormWrapper.find('.auth-form__active').simulate('click')
    expect(authFormWrapper.state().active).toEqual('signup')
  })

  describe('submitting form will send user info', () => {
    const email = 'test@test.com'
    const password = 'test123'

    test('should return email', () => {
      authFormWrapper.find('input[name="email"]').simulate('change', {
        target: { name: 'email', value: email }
      })
      expect(authFormWrapper.state().email).toEqual(email)
    })

    test('should return password', () => {
      authFormWrapper.find('input[name="password"]').simulate('change', {
        target: { name: 'password', value: password }
      })
      expect(authFormWrapper.state().password).toEqual(password)
    })

    test('should call signupUser fn with email and password', () => {
      authFormWrapper.find('.auth-form__form__submit').simulate('click', {
        preventDefault: () => {}
      })
      expect(signupUser).toHaveBeenCalledWith(email, password)
    })

    test('should change form to login on click signup', () => {
      authFormWrapper.find('.auth-form__active').simulate('click')
      expect(authFormWrapper.state().active).toEqual('login')
    })

    test('should call login user fn. with email and password', () => {
      authFormWrapper.find('.auth-form__form__submit').simulate('click', {
        preventDefault: () => {}
      })
      expect(signupUser).toHaveBeenCalledWith(email, password)
    })
  })
})
