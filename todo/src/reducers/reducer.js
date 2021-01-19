import React, { useState, useReducer } from 'react'

const Reducer = () => {
    const [state, setState] = useState({
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      })

    const handleChanges = e => {
        setState(e.target.value)
    }


    return (
        <div>
            <h1>{state.item}</h1>
            <h2>{state.completed}</h2>
            <h3>{state.id}</h3>
        </div>
    )
}

export default Reducer