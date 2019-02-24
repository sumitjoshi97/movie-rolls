import { combineReducers } from 'redux'

import movies from './movies'
import shows from './shows'

export default combineReducers({
  movies,
  shows
})
