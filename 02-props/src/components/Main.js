import React from 'react'

import Header from 'components/Header'
import Body from 'components/Body'

class Main extends React.Component {

    render () {
        return <div>
            <Header />
            <Body name='Spartan' />
        </div>
    }
}

export default Main
