import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from 'actions/todos'

class AddForm extends React.Component {

    state = {
        text: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
    }

    render () {
        return <AddForm text={this.text} onSubmit={this.onSubmit} />
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo })(AddForm)
