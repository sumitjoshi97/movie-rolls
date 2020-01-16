import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return { ...state, isError: true }

    case actionTypes.SET_ERROR_CLEAR:
      return { ...state, isError: false }

    default:
      return state
  }
}
