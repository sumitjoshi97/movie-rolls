import * as actionTypes from '../actions/actionTypes'

const initialState = {
  favorite: null,
  watch: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FAVORITE_LIST_SUCCESS:
      return { ...state, favorite: action.list }

    case actionTypes.FETCH_WATCH_LATER_LIST_SUCCESS:
      return { ...state, watch: action.list }
    default:
      return state
  }
}
