import { INCREMENT, DECREMENT, RESET } from '../actions'

const counterReducer = (state = 50, action) => {
  switch(action.type) {
    case INCREMENT: 
      return state += action.payload

    case DECREMENT: 
      return state -= action.payload

    case RESET:
      return action.payload

    default: 
      return state

  }
}

export default counterReducer
