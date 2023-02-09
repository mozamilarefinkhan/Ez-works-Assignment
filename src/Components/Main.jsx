import React from 'react'
import Header from './Header'
import MainContent from './MainContent'

const Main = ({ client }) => {
    return (
        <div className='main'>
            <Header client={client} />
            <MainContent client={client} />
        </div>
    )
}

export default Main