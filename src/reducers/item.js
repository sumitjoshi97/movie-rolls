import * as actionTypes from '../actions/actionTypes'

const initialState = {
  type: 'movie',
  current: null,
  credits: null,
  videos: null,
  similar: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEM_TYPE:
      return { ...state, type: action.itemType }

    case actionTypes.SET_ITEM_CLEAR:
      return {
        ...state,
        current: null,
        credits: null,
        videos: null,
        similar: null
      }

    case actionTypes.SET_QUERY_ITEM:
      return { ...state, current: action.item }

    case actionTypes.SET_QUERY_ITEM_DETAILS:
      return { ...state, credits: action.credits }

    case actionTypes.SET_QUERY_ITEM_VIDEOS:
      return { ...state, videos: action.videos }

    case actionTypes.SET_SIMILAR_ITEMS:
      return { ...state, similar: action.items }

    default:
      return state
  }
}
