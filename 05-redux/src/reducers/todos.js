import {
    TODO_ADD,
    TODO_REMOVE
} from 'constants/actionTypes'

let runningId = 0
const initialState = addTodo([], {text: 'ทดสอบ'})

export default (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case TODO_ADD:
            return addTodo(state, payload)
        case TODO_REMOVE:
            return removeTodo(state, payload)
        default:
            return state
    }
}

function addTodo (oldState, data) {
    
    if (!data.text) {
        return oldState
    }

    runningId++
    data.id = runningId

    return [...oldState, data]
}

function removeTodo (oldState, id) {
    return oldState.filter(todo => id !== todo.id)
}
