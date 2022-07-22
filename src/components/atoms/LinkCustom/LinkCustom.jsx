import React from 'react'

const Link = ({link, children, large, medium, small }) => {
    
    const sizeClassname = large ? 'large' 
    :  medium ? 'medium'
    :  'small';


    return (
        <a href={link} className={`link-custom ${sizeClassname}`} target="_blank">
            {children}
        </a>
    )
}

export default Link
