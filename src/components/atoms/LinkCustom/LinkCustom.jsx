import React from 'react'

import  './LinkCustom.scss'

const LinkCustom = ({link, children, large, medium, small }) => {
    
    const sizeClassname = large ? 'large' 
    :  medium ? 'medium'
    :  'small';

    return (
        <a href={link}  className={`linkCustom ${sizeClassname}`} target="_blank">
            {children}
        </a>
    )
}

export default LinkCustom