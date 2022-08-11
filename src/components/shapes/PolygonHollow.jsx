import React, {useRef, useEffect } from 'react'
import {gsap} from 'gsap'


const PolygonHollow = ({ addAnimation, x,y, index, color, duration }) => {
    const ref = useRef();

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
    
    return (
        <svg
            filter="url('#inset-shadow')"
            ref={ref}
            width={55}
            height={55}
            fill="none"
        >
            <path
                d="m43.551 13.223-10.22 25.114c-2.109 5.184-8.947 6.315-12.613 2.086l-16.09-18.56C.962 17.635 3.05 11.026 8.482 9.673l26.31-6.555c5.953-1.483 11.072 4.421 8.76 10.105Z"
                stroke={color}
                strokeWidth={5}
            />
        </svg>
    )
}

export default PolygonHollow
