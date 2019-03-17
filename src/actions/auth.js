import * as actionTypes from './actionTypes'

import { setError } from './index'
import { authRef, facebookProvider, googleProvider } from '../config/firebase'

///////////////////////////////////////////////////////////
export const fetchUserSuccess = userId => ({
  type: actionTypes.FETCH_USER_SUCCESS,
  userId
})

//fetch user if logged in
export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch(fetchUserSuccess(user.uid))
    } else {
      dispatch(fetchUserSuccess(null))
    }
  })
}

//sign up user
export const createUser = (email, password) => dispatch => {
  authRef
    .createUserWithEmailAndPassword(email, password)
    .then(res => console.log('success'))
    .catch(err => setError())
}

/////////////////////////////////////////////////////////////
// login user with email password

export const loginUserWithEmailPassword = (email, password) => dispatch => {
  return authRef
    .signInWithEmailAndPassword(email, password)
    .then(res => console.log('success'))
    .catch(err => setError())
}

// login user with social
export const loginUserWithSocial = provider => dispatch => {
  const authProvider = provider === 'google' ? googleProvider : facebookProvider
  return authRef
    .signInWithPopup(authProvider)
    .then(res => console.log('success'))
    .catch(err => setError())
}

/////////////////////////////////////////////////////////////////
///logout user

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS
})

export const logout = () => dispatch => {
  return authRef
    .signOut()
    .then(() => dispatch(logoutSuccess()))
    .catch(err => setError())
}

//////////////////////////////////////////////////////////////
// set redirect path

export const setRedirectPath = path => ({
  type: actionTypes.SET_REDIRECT_PATH,
  path
})
