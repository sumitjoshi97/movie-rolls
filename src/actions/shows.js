import * as actionTypes from './actionTypes'
import { setError } from './index'
import axios from '../axios-orders'

export const setCurrentShows = shows => ({
  type: actionTypes.SET_CURRENT_SHOWS,
  shows
})

export const getCurrentShows = () => async dispatch => {
  return axios
    .get(
      `/tv/on_the_air?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US&page=1`
    )
    .then(res => dispatch(setCurrentShows(res.data)))
    .catch(err => dispatch(setError()))
}

export const setPopularShows = shows => ({
  type: actionTypes.SET_POPULAR_SHOWS,
  shows
})

export const getPopularShows = () => async dispatch => {
  return axios
    .get(
      `/tv/popular?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US&page=1`
    )
    .then(res => dispatch(setPopularShows(res.data)))
    .catch(err => dispatch(setError()))
}

export const setAiringTodayShows = shows => ({
  type: actionTypes.SET_AIRING_TODAY_SHOWS,
  shows
})

export const getAiringTodayShows = () => async dispatch => {
  return axios
    .get(
      `/tv/airing_today?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US&page=1`
    )
    .then(res => dispatch(setAiringTodayShows(res.data)))
    .catch(err => dispatch(setError()))
}

export const setTopShows = shows => ({
  type: actionTypes.SET_TOP_SHOWS,
  shows
})

export const getTopShows = () => async dispatch => {
  return axios
    .get(
      `/tv/top_rated?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US&page=1`
    )
    .then(res => dispatch(setTopShows(res.data)))
    .catch(err => dispatch(setError()))
}

export const setSimilarShows = shows => ({
  type: actionTypes.SET_SIMILAR_SHOWS,
  shows
})

export const getSimilarShows = showId => async dispatch => {
  return axios
    .get(
      `/tv/${showId}/similar?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US&page=1`
    )
    .then(res => dispatch(setSimilarShows(res.data)))
    .catch(err => dispatch(setError()))
}
