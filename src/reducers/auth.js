import * as actionTypes from '../actions/actionTypes'

const initialState = {
  user: null,
  redirectPath: '/'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_SUCCESS:
      return { ...state, user: action.user }

    case actionTypes.SET_REDIRECT_PATH:
      return { ...state, redirectPath: action.path }

    default:
      return state
  }
}
