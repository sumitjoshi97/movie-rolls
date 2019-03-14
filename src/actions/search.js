import * as actionTypes from './actionTypes'
import { setError } from './index'

import axios from '../axios-orders'

export const setSearchResults = items => ({
  type: actionTypes.SET_SEARCH_RESULTS,
  items
})

export const getSearchResults = queryWord => dispatch => {
  return axios
    .get(
      `/search/multi?include_adult=false&language=en-US&page=1&query=${queryWord}&api_key=${
        process.env.REACT_APP_TMDB_API
      }`
    )
    .then(res => dispatch(setSearchResults(res.data)))
    .catch(err => setError())
}
