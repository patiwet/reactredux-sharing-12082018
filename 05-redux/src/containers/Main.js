import React from 'react'

import AddForm from 'containers/AddForm'
import TodoList from 'containers/TodoList'

class Main extends React.Component {

    render () {
        return <div>
            <AddForm />
            <TodoList />
        </div>
    }
}

export default Main
