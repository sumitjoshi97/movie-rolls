export { setError } from './error'

export {
  getCurrentMovies,
  getPopularMovies,
  getTopMovies,
  getUpcomingMovies
} from './movies'

export {
  getCurrentShows,
  getAiringTodayShows,
  getPopularShows,
  getTopShows
} from './shows'

export {
  setItemType,
  setItemClear,
  getQueryItem,
  getQueryItemCredits,
  getQueryItemVideos,
  getSimilarItems
} from './item'

export {
  createUser,
  loginUserWithEmailPassword,
  loginUserWithSocial,
  fetchUser,
  logout,
  setRedirectPath
} from './auth'

export { addToList, removeFromList, fetchList } from './database'

export { getSearchResults } from './search'

export { getDiscoverMovieResults, getDiscoverShowResults } from './discover'

export { clearError } from './error'