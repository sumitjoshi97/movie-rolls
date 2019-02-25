import * as actionTypes from './actionTypes'
import { setError } from './index'
import axios from '../axios-orders'

export const setLatest = (latest, images) => ({
  type: actionTypes.SET_LATEST,
  latest,
  images
})

export const getLatestMovie = () => async dispatch => {
  const latest = await axios.get(
    `/movie/latest?api_key=${
      process.env.REACT_APP_TMDB_API
    }&language=en-US&page=1`
  )
  return await dispatch(setLatest(latest.data))
}

export const setCurrentMovies = movies => ({
  type: actionTypes.SET_CURRENT_MOVIES,
  movies
})

export const getCurrentMovies = () => async dispatch => {
  return axios
    .get(
      `/movie/now_playing?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US&page=1`
    )
    .then(res => dispatch(setCurrentMovies(res.data)))
    .catch(err => dispatch(setError()))
}

export const setPopularMovies = movies => ({
  type: actionTypes.SET_POPULAR_MOVIES,
  movies
})

export const getPopularMovies = () => async dispatch => {
  return axios
    .get(
      `/movie/popular?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US&page=1`
    )
    .then(res => dispatch(setPopularMovies(res.data)))
    .catch(err => dispatch(setError()))
}

export const setUpcomingMovies = movies => ({
  type: actionTypes.SET_UPCOMING_MOVIES,
  movies
})

export const getUpcomingMovies = () => async dispatch => {
  return axios
    .get(
      `/movie/upcoming?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US&page=1`
    )
    .then(res => dispatch(setUpcomingMovies(res.data)))
    .catch(err => dispatch(setError()))
}

export const setTopMovies = movies => ({
  type: actionTypes.SET_TOP_MOVIES,
  movies
})

export const getTopMovies = () => async dispatch => {
  return axios
    .get(
      `/movie/top_rated?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US&page=1`
    )
    .then(res => dispatch(setTopMovies(res.data)))
    .catch(err => dispatch(setError()))
}

export const setSimilarMovies = movies => ({
  type: actionTypes.SET_SIMILAR_MOVIES,
  movies
})

export const getSimilarMovies = movieId => async dispatch => {
  return axios
    .get(
      `/movie/${movieId}/similar?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US&page=1`
    )
    .then(res => dispatch(setSimilarMovies(res.data)))
    .catch(err => dispatch(setError()))
}
