import * as actionTypes from './actionTypes'
import { setError } from './index'

import axios from '../axios-orders'

////////////////////////////////////////////////////////
export const setDiscoverMovieResults = movies => ({
  type: actionTypes.SET_DISCOVER_MOVIE_RESULTS,
  movies
})

export const getDiscoverMovieResults = ({
  year,
  ratings,
  sortBy,
  orderBy
}) => dispatch => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?language=en-US&include_adult=false&include_video=false&page=1
      &primary_release_year=${year}
      &vote_average.gte=${ratings.min}
      &vote_average.lte=${ratings.max}
      &sort_by=${sortBy}.${orderBy}
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

export const getDiscoverShowResults = ({
  year,
  ratings,
  sortBy,
  orderBy
}) => dispatch => {
  console.log(sortBy, orderBy)
  return axios
    .get(
      `/discover/tv?language=en-US&page=1&include_null_first_air_dates=false
        &first_air_date_year=${year}
        &vote_average.gte=${ratings.min}
        &bote_average.gte=${ratings.max}
        &sort_by=${sortBy}.${orderBy}
        &api_key=${process.env.REACT_APP_TMDB_API}`
    )
    .then(res => dispatch(setDiscoverShowResults(res.data)))
    .catch(err => setError())
}
