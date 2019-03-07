export { setError } from './error'

export {
  getCurrentMovies,
  getPopularMovies,
  getTopMovies,
  getUpcomingMovies,
  getSimilarMovies
} from './movies'

export {
  getCurrentShows,
  getAiringTodayShows,
  getPopularShows,
  getTopShows,
  getSimilarShows
} from './shows'

export {
  setItemType,
  getQueryItem,
  getQueryItemCredits,
  getQueryItemVideos
} from './item'

export {
  createUser,
  loginUserWithEmailPassword,
  loginUserWithSocial,
  fetchUser
} from './auth'

export { addToList, removeFromList } from './database'
