import * as actionTypes from '../actions/actionTypes'

const initialState = {
  latest: null,
  current: null,
  popular: null,
  top: null,
  upcoming: null,
  similar: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_MOVIES:
      return { ...state, current: action.movies }

    case actionTypes.SET_UPCOMING_MOVIES:
      return { ...state, upcoming: action.movies }

    case actionTypes.SET_POPULAR_MOVIES:
      return { ...state, popular: action.movies }

    case actionTypes.SET_TOP_MOVIES:
      return { ...state, top: action.movies }

    case actionTypes.SET_SIMILAR_MOVIES:
      return { ...state, top: action.movies }

    default:
      return state
  }
}
