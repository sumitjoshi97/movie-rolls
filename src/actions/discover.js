import * as actionTypes from './actionTypes'
import { setError } from './index'

import axios from '../axios-orders'

////////////////////////////////////////////////////////
export const setDiscoverMovieResults = movies => ({
  type: actionTypes.SET_DISCOVER_MOVIE_RESULTS,
  movies
})

export const getDiscoverMovieResults = query => dispatch => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?language=en-US&include_adult=false&include_video=false&page=1
      &primary_release_year=${query.year}
      &vote_average.gte=${query.rating.min}
      &vote_average.lte=${query.rating.max}
      &sort_by=popularity.desc
      &api_key=${process.env.REACT_APP_TMDB_API}`
    )
    .then(res => dispatch(setDiscoverMovieResults(res.data)))
    .catch(err => setError())
}

///////////////////////////////////////////////////////////////////////
//

export const setDiscoverShowResults = shows => ({
  type: actionTypes.SET_DISCOVER_SHOW_RESULTS,
  shows
})

export const getDiscoverShowResults = query => dispatch => {
  return axios
    .get(
      `/discover/tv?language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&api_key=${
        process.env.REACT_APP_TMDB_API
      }`
    )
    .then(res => dispatch(setDiscoverShowResults(res.data)))
    .catch(err => setError())
}
