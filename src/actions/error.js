import * as actionTypes from './actionTypes'

export const setError = () => ({
  type: actionTypes.SET_ERROR,
})

export const setErrorClear = () => ({
  type: actionTypes.SET_ERROR_CLEAR,
})

export const clearError = () => dispatch => {
  return dispatch(setErrorClear())
}
