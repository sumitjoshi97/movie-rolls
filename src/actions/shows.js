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
