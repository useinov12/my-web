import React from 'react'
import './Chip.scss'

const Chip = ({children, large, medium, small  }) => {
    // console.log(children)
    const sizeClassname = large ? 'large' 
    :  medium ? 'medium'
    :  'small';

    return (
        <div className={`chip ${sizeClassname}`} >
            {children}
        </div>
    )
}

export default Chip
