import { ADD, TOGGLE, CLEAR } from '../actions/actions'

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]



export const reducer = (state = initialState, action) => {

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

