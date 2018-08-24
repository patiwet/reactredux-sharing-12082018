import {
    TODO_ADD,
    TODO_REMOVE
} from 'constants/actionTypes'

const initialState = [createTodo({text: 'ทดสอบ'})]

export default (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case TODO_ADD:
            return createTodo(state, payload)
        case TODO_REMOVE:
            return removeTodo(state, payload)
        default:
            return state
    }
}

let runningId = 0
const createTodo = (oldState, data) => {

    runningId++
    data.id = runningId

    return [...oldState, data]
}

const removeTodo = (oldState, id) => {
    state.filter(todo => id !== todo.id)
}
