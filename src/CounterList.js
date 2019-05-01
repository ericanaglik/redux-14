import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actions'
import Counter from './Counter'

const CounterList = (props) => {
    return (
        <div>
            {props.counters.map(count => <Counter count={count} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { counters: state.counters }
}

const mapDispatchToProps = () => {
    return { increment, decrement, reset }
}

export default connect(mapStateToProps, mapDispatchToProps())(CounterList)