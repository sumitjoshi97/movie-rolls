import { combineReducers } from 'redux'

import movies from './movies'
import shows from './shows'
import item from './item'
import auth from './auth'
import database from './database'
import search from './search'
import discover from './discover'

export default combineReducers({
  movies,
  shows,
  item,
  auth,
  database,
  search,
  discover
})
