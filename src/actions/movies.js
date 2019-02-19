import * as actionTypes from './actionTypes'
import axios from '../axios-orders'

export const setMovies = movies => {
  return {
    type: actionTypes.SET_CURRENT_MOVIES,
    movies
  }
}

export const getCurrentMovies = () => async dispatch => {
  axios
    .get(
      `/movie/now_playing?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US&page=1`
    )
    .then(res => dispatch(setMovies(res.data)))
}
