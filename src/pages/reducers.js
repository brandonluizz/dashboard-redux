import {
    combineReducers,
  } from 'redux'
  import dashReducer from './Dashboard/reducer'
  
  export const rootReducer = combineReducers({
    dashboard: dashReducer
  })
  