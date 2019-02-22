import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

// redux dev tools in developemt mode
const composeEnhancer =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose

// export store
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
)
