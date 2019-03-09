import * as actionTypes from './actionTypes'

import { setError } from './index'
import { databaseRef } from '../config/firebase'

////////////////////////////////////////////////////////////////////
//add item to list - favorites / watch later

export const addToList = (list, data, userId) => dispatch => {
  return databaseRef
    .child(list)
    .child(userId)
    .push(data)
    .catch(err => setError())
}

////////////////////////////////////////////////////////////////////
//remove item from list - favorites / watch later

export const removeFromList = (list, itemId, userId) => dispatch => {
  return databaseRef
    .child(list)
    .child(userId)
    .remove(itemId)
    .catch(err => setError())
}

/////////////////////////////////////////////////////////////////////
// fetch user list - favorite / watch later

export const fetchFavoriteListSuccess = list => ({
  type: actionTypes.FETCH_FAVORITE_LIST_SUCCESS,
  list
})

export const fetchWatchLaterListSuccess = list => ({
  type: actionTypes.FETCH_WATCH_LATER_LIST_SUCCESS,
  list
})

export const fetchList = (list, userId) => dispatch => {
  return databaseRef
    .child(list)
    .child(userId)
    .on('value', snapshot => {
      if (list === 'favorite') {
        return dispatch(fetchFavoriteListSuccess(snapshot.val()))
      } else {
        return dispatch(fetchWatchLaterListSuccess(snapshot.val()))
      }
    })
}
