export const ADD = "ADD"
export const TOGGLE = "TOGGLE"
export const CLEAR = "CLEAR"

export const add = (itemName) => {
    return({type: ADD, payload: itemName})
}

export const toggle = (toggle) => {
    return({type: TOGGLE, payload: toggle})
}

export const clear = (clear) => {
    return({type: CLEAR, payload: clear})
}