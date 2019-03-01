import * as actionTypes from './actionTypes'

import axios from '../axios-orders'

export const setGuestSession = session => ({
  type: actionTypes.SET_GUEST_SESSION,
  session
})

export const createGuestSession = () => {
  return axios.get(
    `/authentication/guest_session/new?api_key=${
      process.env.REACT_APP_TMDB_API
    }`
  )
}

export const getRequestToken = () => {
  return axios
    .get(`/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_API}`)
    .then(res => localStorage.setItem('token', res.data))
}

export const createSession = () => {
  const token = localStorage.getItem('token')

  if (token.expires < new Date() * 1000) {
    getRequestToken()
  }
  return axios.post(
    `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000`,
    token
  )
}

export const logout = () => {
  const sessionId = localStorage.getItem('session')

  const data = {
    session_id: sessionId
  }

  return axios.delete(
    `/authentication/session?api_key=${process.env.REACT_APP_TMDB_API}`,
    data
  )
}
