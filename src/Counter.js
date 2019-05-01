import React from 'react'
import { increment, decrement } from './actions'
import { connect } from 'react-redux'

const Counter = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={ () => props.decrement(5) }>down</button>
      <button onClick={ () => props.increment(5) }>Up</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { count: state.counter }
}

const mapStateToDispatch = () => {
  return { increment, decrement }
}

export default connect(mapStateToProps, mapStateToDispatch())(Counter)