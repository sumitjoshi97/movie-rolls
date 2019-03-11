import * as actionTypes from '../actions/actionTypes'

const initialState = {
  userId: '',
  redirectPath: '/'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_SUCCESS:
      return { ...state, userId: action.user.uid }

    case actionTypes.SET_REDIRECT_PATH:
      return { ...state, redirectPath: action.path }

    default:
      return state
  }
}
