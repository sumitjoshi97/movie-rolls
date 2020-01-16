import * as actionTypes from '../actions/actionTypes'

const initialState = {
  userId: null,
  redirectPath: '/'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_SUCCESS:
      return { ...state, userId: action.userId }

    case actionTypes.SET_REDIRECT_PATH:
      return { ...state, redirectPath: action.path }

    case actionTypes.LOGOUT_SUCCESS:
      return { ...state, userId: null, redirectPath: '/' }
    default:
      return state
  }
}
