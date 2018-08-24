import {
    TODO_ADD,
    TODO_REMOVE
} from 'constants/actionTypes'

export const addTodo = (form) => {

    return {
        action: TODO_ADD,
        payload: form
    }
}

export const removeTodo = (id) => {

    return {
        action: TODO_ADD,
        payload: id
    }
}
