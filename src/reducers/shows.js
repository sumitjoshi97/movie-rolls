import * as actionTypes from '../actions/actionTypes'

const initialState = {
  current: null,
  popular: null,
  top: null,
  airingToday: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_SHOWS:
      return { ...state, current: action.shows }

    case actionTypes.SET_AIRING_TODAY_SHOWS:
      return { ...state, airingToday: action.shows }

    case actionTypes.SET_POPULAR_SHOWS:
      return { ...state, popular: action.shows }

    case actionTypes.SET_TOP_SHOWS:
      return { ...state, top: action.shows }

    default:
      return state
  }
}
