import React from 'react'

import Todo from 'components/Todo'

const TodoList = ({todos, removeTodo}) => <ul className="list-group">
    {todos.map(todo => <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />)}
</ul>

export default TodoList