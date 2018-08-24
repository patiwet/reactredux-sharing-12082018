import {
    TODO_ADD,
    TODO_REMOVE
} from 'constants/actionTypes'

export const addTodo = (data) => {

    return {
        type: TODO_ADD,
        payload: data
    }
}

export const removeTodo = (id) => {

    return {
        type: TODO_ADD,
        payload: id
    }
}
