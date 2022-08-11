import React from 'react'
import './button.scss'



const Button = ( { primary, className, label, active, onClick }) => {
    const isActive = active === true  ?  'button--nav-active' : 'button--nav-passive';
    // const isPrimary = primary === true  ?  'button--primary' : 'button--secondary';
    return (
        <div>
            <button onClick={onClick} className={['button--default', className, isActive].join(' ')}>
                {label}
            </button>
        </div>
    )
}

export default Button
