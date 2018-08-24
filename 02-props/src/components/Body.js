import React from 'react'

class Body extends React.Component {

    render () {
        return <div>
            Hello <strong>{this.props.name}</strong>!!
        </div>
    }
}

export default Body
