import React from 'react'

const Body = (props) => {
    
    const {name, onNameChange} = props
    
    return (<div>
        <div>
            enter your name: <input value={name} onChange={onNameChange} />
        </div>
        <div>
            Hello <strong>{name ? name : 'No One'}</strong>
        </div>
    </div>)
}

export default Body
