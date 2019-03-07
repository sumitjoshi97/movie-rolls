import * as actionTypes from '../actions/actionTypes'

const initialState = {
  favorites: null,
  watchLater: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_LIST_SUCCESS:
      return { ...state }

    case actionTypes.REMOVE_FROM_LIST_SUCCESS:
      return { ...state }

    case actionTypes.FETCH_FAVORITE_LIST_SUCCESS:
      return { ...state, favorites: action.list }

    case actionTypes.FETCH_WATCH_LATER_LIST_SUCCESS:
      return { ...state, watchLater: action.list }
    default:
      return state
  }
}
