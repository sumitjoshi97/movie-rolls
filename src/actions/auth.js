import * as actionTypes from './actionTypes'

import { setError } from './index'
import axios from '../axios-orders'

////////////////////////////////////////////////////////////
// set guest session for tmdb
export const setGuestSession = session => ({
  type: actionTypes.SET_GUEST_SESSION,
  session
})

export const startGuestSession = () => dispatch => {
  return axios
    .get(
      `/authentication/guest_session/new?api_key=${
        process.env.REACT_APP_TMDB_API
      }`
    )
    .then(res => dispatch(setGuestSession(res.data)))
    .catch(err => setError())
}

////////////////////////////////////////////////////////////
// set request token for auth login
export const setRequestToken = token => ({
  type: actionTypes.SET_REQUEST_TOKEN,
  token
})

export const getRequestToken = () => {
  return axios
    .get(`/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_API}`)
    .then(res => localStorage.setItem('token', res.data))
}

/////////////////////////////////////////////////////////////
// create auth session -

export const setSession = session => ({
  type: actionTypes.SET_SESSION,
  session
})

export const startSession = () => {
  const token = localStorage.getItem('token')

  if (token.expires < new Date() * 1000) {
    getRequestToken()
  }
  return axios.post(
    `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000`,
    token
  )
}

/////////////////////////////////////////////////////////////
//logout
export const successlogout = () => ({
  type: actionTypes.SUCCESS_LOGOUT
})

export const startlogout = () => dispatch => {
  const sessionId = localStorage.getItem('session')

  const data = {
    session_id: sessionId
  }

  return axios
    .delete(
      `/authentication/session?api_key=${process.env.REACT_APP_TMDB_API}`,
      data
    )
    .then(res => dispatch(logoutSuccess()))
    .catch(err => setError())
}
