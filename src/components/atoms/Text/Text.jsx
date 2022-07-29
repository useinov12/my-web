import React from 'react'
import './Text.scss'

const Text = ({children}) => {
    return (
        <p className={'text'}>
            {children}
        </p>
    )
}

export default Text
