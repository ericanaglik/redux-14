import { INCREMENT, DECREMENT, RESET } from '../actions'

const counterReducer = (state = [5, 3, 7], action) => {
  const newState = [...state]
  console.log(action)

  switch(action.type) {
    case INCREMENT: 
      newState[0] += action.payload
      return newState

    case DECREMENT: 
      newState[0] -= action.payload
      return newState

    case RESET:
      newState[0] = action.payload
      return newState

    default: 
      return state

  }
}

export default counterReducer
