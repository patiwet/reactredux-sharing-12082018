import React from 'react'

import AddForm from 'containers/AddForm'
import TodoList from 'containers/TodoList'

class Main extends React.Component {

    render () {    
        return <div className='container'>
            <AddForm />
            <TodoList />
        </div>
    }
}

export default Main
