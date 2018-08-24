import React from 'react'

class Body extends React.Component {

    state = {
        name: ''
    }

    onNameChange = (e) => {
        const {value} = e.target
        const newState = {name: value}

        this.setState(newState)
    }

    render () {
        const {name} = this.state
        return <div>
            <div>
                enter your name: <input value={name} onChange={this.onNameChange} />
            </div>
            <div>
                Hello <strong>{name ? name : 'No One'}</strong>
            </div>
        </div>
    }
}

export default Body
