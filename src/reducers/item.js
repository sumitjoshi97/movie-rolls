import * as actionTypes from '../actions/actionTypes'

const initialState = {
  type: 'movie',
  current: null,
  credits: null,
  videos: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEM_TYPE:
      return { ...state, type: action.itemType }

    case actionTypes.SET_ITEM_CLEAR:
      return { ...state, current: null, credits: null, videos: null }

    case actionTypes.SET_QUERY_ITEM:
      return { ...state, current: action.item }

    case actionTypes.SET_QUERY_ITEM_DETAILS:
      return { ...state, credits: action.credits }

    case actionTypes.SET_QUERY_ITEM_VIDEOS:
      return { ...state, videos: action.videos }
    default:
      return state
  }
}
