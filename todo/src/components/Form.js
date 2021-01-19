import React, { useState, useReducer } from 'react'
import { ADD, TOGGLE, CLEAR } from '../actions/actions'
import { reducer, initialState } from '../reducers/reducer'

const Form = () => {
    const [item, setItem] = useState('')
    const [todos, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const toggle = (toggle) => {
        dispatch({type: TOGGLE, payload: toggle})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch({type: ADD, payload: item})

        setItem('')
    }

    const clear = (e) => {
        e.preventDefault()

        dispatch({type: CLEAR})
    }

    return (
        <div>
            <h1>New todo</h1>
            <form>
                <input
                    id="item"
                    name="item"
                    type="text"
                    value={item}
                    placeholder="Enter your item"
                    onChange={handleChange}
                />
                <button 
                    onClick={onSubmit}
                >
                    Add
                </button>
                <button
                    onClick={clear}
                >
                    Clear
                </button>
            </form>
            <h2>
                Things Todo
            </h2>
            {
                todos.map(todo => (
                    <div
                        className={`${todo.compleded ? 'completed' : ''}`}
                        onClick={() => toggle(todo.id)}
                        key={todo.id}
                    >
                        <p>{todo.item}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Form