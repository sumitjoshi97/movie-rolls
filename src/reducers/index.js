import { combineReducers } from 'redux'

import movies from './movies'
import shows from './shows'
import item from './item'

export default combineReducers({
  movies,
  shows,
  item
})
