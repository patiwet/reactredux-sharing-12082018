import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from 'actions/todos'

import AddForm from 'components/AddForm'

class AddFormContainer extends React.Component {

    state = {
        text: ''
    }

    onChangeText = (e) => {
        const {value} = e.target
        const newState = {text: value}
        this.setState(newState)
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({text: ''})
    }

    render () {
        return <AddForm
            text={this.state.text}
            onChangeText={this.onChangeText}
            onSubmit={this.onSubmit} />
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, { addTodo })(AddFormContainer)
