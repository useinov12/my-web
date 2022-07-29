import React, {useRef, useEffect } from 'react'
import {gsap} from 'gsap'

const SquareHollow = ({ addAnimation, x, index, color, duration }) => {
    const ref = useRef();

    useEffect(() => {  
        const animation = gsap.to(ref.current,  {
            x: `${x}rem`, 
            ease:'back', 
            duration:duration, 
            rotate:420,
        });
        addAnimation(animation, index);
        return () => animation.progress(0).kill();
        
    }, [addAnimation]);

    return (

        <svg
            filter="url('#inset-shadow')"
            ref={ref}
            width={55}
            height={55}
            fill="none"
        >
            <rect
                x={0.905}
                y={11.597}
                width={33}
                height={33}
                rx={3.5}
                transform="rotate(-18.904 .905 11.597)"
                stroke={color}
                strokeWidth={3}
            />
        </svg>

    )
}

export default SquareHollow
