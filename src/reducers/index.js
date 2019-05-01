import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

// { counter: 0, profile: {}, currentItem: id }

const reducers = combineReducers({
  counter: counterReducer
})

export default reducers
