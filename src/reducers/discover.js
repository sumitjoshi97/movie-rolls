import * as actionTypes from '../actions/actionTypes'

const initialState = {
  movies: null,
  shows: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DISCOVER_MOVIE_RESULTS:
      return { ...state, movies: action.movies }

    case actionTypes.SET_DISCOVER_SHOW_RESULTS:
      return { ...state, shows: action.shows }

    default:
      return state
  }
}
