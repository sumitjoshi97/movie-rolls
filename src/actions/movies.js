import * as actionTypes from './actionTypes'
import { setError } from './index'
import axios from '../axios-orders'

export const setCurrentMovies = movies => ({
  type: actionTypes.SET_CURRENT_MOVIES,
  movies
})

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
