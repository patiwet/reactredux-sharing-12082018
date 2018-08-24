import {
    TODO_ADD,
    TODO_REMOVE
} from 'constants/actionTypes'

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

let runningId = 0
function addTodo (oldState, data) {

    runningId++
    data.id = runningId

    return [...oldState, data]
}

function removeTodo (oldState, id) {
    state.filter(todo => id !== todo.id)
}
