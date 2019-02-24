import * as actionTypes from '../actions/actionTypes'

const initialState = {
  latest: [],
  currentShows: null,
  popularShows: null,
  popularShows: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LATEST:
      return { ...state, latest: [...state.latest, { ...action.latest }] }

    case actionTypes.SET_CURRENT_SHOWS:
      return { ...state, currentShows: action.shows }
    default:
      return state
  }
}
