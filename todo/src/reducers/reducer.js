import React, { useState, useReducer } from 'react'

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

const ToDo = () => {

    const reducer = (state = initialState, action) => {

        switch(action.type) {

            case("NEW"):

                return[
                    ...state, 
                    {
                        item: action.payload,
                        completed: false,
                        id: Math.random()
                    }
                ]

            case("TOGGLE"):

                return state.map(item => item.id === action.payload ? {...item, completed: !item.completed} : item)

            case("CLEAR"):

                return state.filter(item => !item.completed)

            default:

                return state
        }
    }
    
        return (
            <div>
                <h2>{initialState.item}</h2>
                <h2>{initialState.completed}</h2>
                <h2>{initialState.id}</h2>
            </div>
        )
    
}

export default ToDo