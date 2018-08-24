import React from 'react'

import Body from 'components/Body'

class BodyContainer extends React.Component {

    state = {
        name: ''
    }

    onNameChange = (e) => {
        const { value } = e.target
        const newState = { name: value }

        this.setState(newState)
    }

    render() {

        return <Body
            name={this.state.name}
            onNameChange={this.onNameChange} />
    }
}

export default BodyContainer
