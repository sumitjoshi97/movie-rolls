import * as actionTypes from './actionTypes'
import { setError } from './index'
import axios from '../axios-orders'

// set type - movie / tv - sync
export const setItemType = itemType => ({
  type: actionTypes.SET_ITEM_TYPE,
  itemType
})

///////////////////////////////////////////////////////////
//clear item
export const setItemClear = () => ({
  type: actionTypes.SET_ITEM_CLEAR
})

//////////////////////////////////////////////////////////////
// set base item - tv/show - details
export const setQueryItem = item => ({
  type: actionTypes.SET_QUERY_ITEM,
  item
})

// get base item - tv/show - details - async
export const getQueryItem = (itemType, itemId) => dispatch => {
  return axios
    .get(
      `/${itemType}/${itemId}?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US`
    )
    .then(res => dispatch(setQueryItem(res.data)))
    .catch(err => setError())
}

/////////////////////////////////////////////////////////////
// set item - tv/show - cast
export const setQueryItemCredits = credits => ({
  type: actionTypes.SET_QUERY_ITEM_DETAILS,
  credits
})

// get item - tv/show - cast - async
export const getQueryItemCredits = (itemType, itemId) => dispatch => {
  return axios
    .get(
      `/${itemType}/${itemId}/credits?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US`
    )
    .then(res => dispatch(setQueryItemCredits(res.data)))
    .catch(err => setError())
}

//////////////////////////////////////////////////////////////
// set item - movie/tv - videos/trailers
export const setQueryItemVideos = videos => ({
  type: actionTypes.SET_QUERY_ITEM_VIDEOS,
  videos
})

// get item - movie/tv - videos/trailers - async
export const getQueryItemVideos = (itemType, itemId) => dispatch => {
  return axios
    .get(
      `/${itemType}/${itemId}/videos?api_key=${
        process.env.REACT_APP_TMDB_API
      }&language=en-US`
    )
    .then(res => dispatch(setQueryItemVideos(res.data)))
    .catch(err => setError())
}
