import React, {useRef, useEffect } from 'react'
import {gsap} from 'gsap'




const SquareFull = ({ addAnimation, x,index, color, duration }) => {
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
            width={46}
            height={46}
            fill="none"
        >
          <path
            d="M3.912 18.04 24.015 3.18a3.5 3.5 0 0 1 4.895.733l14.862 20.103a3.5 3.5 0 0 1-.733 4.895L22.935 43.772a3.5 3.5 0 0 1-4.895-.733L3.179 22.935a3.5 3.5 0 0 1 .733-4.895Z"
            fill={color}
            stroke={color}
            strokeWidth={3}
          />
        </svg>
    )
}


export default SquareFull
