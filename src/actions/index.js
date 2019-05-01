const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

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

export { INCREMENT, DECREMENT, increment, decrement }
