import * as actionTypes from '../actions/actionTypes'

const initialState = {
  searchResults: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.items }

    default:
      return state
  }
}
