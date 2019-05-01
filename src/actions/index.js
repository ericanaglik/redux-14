const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const reset = (val = 0) => {
  return { type: RESET, payload: val }
}

const increment = (val = 1) => {
  return {
    type: INCREMENT,
    payload: val
  }
}

const decrement = (val = 1) => {
  return { 
    type: DECREMENT, 
    payload: val 
  }
}

export { INCREMENT, DECREMENT, RESET, increment, decrement, reset }
