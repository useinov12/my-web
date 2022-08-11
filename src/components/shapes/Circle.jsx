import React, {useRef, useEffect } from 'react'
import {gsap} from 'gsap'


const Circle = ({ addAnimation, x, index, color, duration }) => { 
    const ref = useRef();

    const chooseRadius = Math.floor(Math.random()*2) === 0 ? 20  : 15
    
    

    useEffect(() => {  
        const animation = gsap.to(ref.current, {
            x: `${x}rem`, 
            ease:'back', 
            duration:duration, 
            rotate:420,
        });
        addAnimation(animation, index);
        return () => animation.progress(0).kill();
        
    }, [addAnimation]);

    return(
        <svg
            filter="url('#inset-shadow')"
            ref={ref}
            className={'shape'}
            width={55}
            height={55}
            fill="none"
        >
            <circle cx={25} cy={25} r={chooseRadius} fill={color} />
        </svg>
    )
}

export default Circle