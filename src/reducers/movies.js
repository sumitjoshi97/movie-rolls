import * as actionTypes from '../actions/actionTypes'

const initialState = {
  latest: [],
  currentMovies: null,
  popularMovies: null,
  popularShows: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LATEST:
      return { ...state, latest: [...state.latest, { ...action.latest }] }

    case actionTypes.SET_CURRENT_MOVIES:
      return { ...state, currentMovies: action.movies }
    default:
      return state
  }
}
