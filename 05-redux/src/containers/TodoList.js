import React from 'react'
import { connect } from 'react-redux'

import { removeTodo } from 'actions/todos'

import TodoList from 'components/TodoList'

class TodoListContainer extends React.Component {

    removeTodo = (id) => {
        this.props.removeTodo(id)
    }

    render() {

        const { todos } = this.props

        return <TodoList todos={todos} removeTodo={this.removeTodo} />
    }
}

export default connect(({ todos }) => ({ todos }), { removeTodo })(TodoListContainer)
