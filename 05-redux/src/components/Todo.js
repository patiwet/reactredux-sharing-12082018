import React from 'react'

const Todo = ({ todo, removeTodo }) => <li className="list-group-item">
    {todo.text} <span className='btn btn-danger' onClick={() => removeTodo(todo.id)}>remove</span>
</li>

export default Todo