import React, {useRef, useEffect } from 'react'
import {gsap} from 'gsap'

const Application = ({ addAnimation, x, index, duration }) => {
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
            className={'shape'}
            width={60}
            height={60}
            fill="none"
        >
            <path
                d="M16.628 30.268a1.306 1.306 0 0 1-.547-.118 1.411 1.411 0 0 1-.463-.34l-3.45-3.771a1.554 1.554 0 0 1-.316-.505 1.666 1.666 0 0 1 0-1.199c.074-.19.18-.361.316-.505l3.812-4.166a1.37 1.37 0 0 1 1.01-.457c.379 0 .742.164 1.01.457.268.293.418.69.418 1.104 0 .414-.15.811-.418 1.104l-2.802 3.167 2.46 2.562c.267.293.417.69.417 1.104 0 .415-.15.812-.418 1.105a1.409 1.409 0 0 1-.471.344 1.305 1.305 0 0 1-.558.114ZM30.123 30.268a1.306 1.306 0 0 1-.548-.118 1.41 1.41 0 0 1-.463-.34 1.64 1.64 0 0 1-.418-1.105c0-.414.15-.81.418-1.104l2.44-2.562-2.726-2.98a1.64 1.64 0 0 1-.418-1.104c0-.414.15-.81.418-1.104a1.37 1.37 0 0 1 1.01-.457c.38 0 .743.165 1.01.457l3.813 4.167c.135.144.242.315.315.505a1.666 1.666 0 0 1 0 1.198c-.073.19-.18.362-.315.505l-3.45 3.771c-.155.123-.33.211-.518.258-.186.046-.38.05-.568.013ZM21.47 32.205a1.1 1.1 0 0 1-.496 0 1.389 1.389 0 0 1-.501-.323 1.546 1.546 0 0 1-.339-.516 1.666 1.666 0 0 1 .001-1.244l3.888-11.75c.065-.2.168-.385.3-.541.133-.157.293-.282.472-.367a1.328 1.328 0 0 1 1.134-.009c.186.069.356.179.5.324.145.144.26.32.34.516a1.666 1.666 0 0 1-.001 1.244l-4.04 11.75a1.573 1.573 0 0 1-.514.649c-.221.161-.479.254-.745.267Z"
                fill="#fff"
            />
            <path
                d="M33.382 47.435H13.369c-2.022 0-3.962-.878-5.391-2.441-1.43-1.563-2.234-3.683-2.234-5.893V10.976c0-2.21.804-4.33 2.234-5.892 1.43-1.563 3.369-2.441 5.39-2.441h20.014c2.022 0 3.961.878 5.39 2.44 1.43 1.563 2.234 3.683 2.234 5.893v28.125c0 2.21-.803 4.33-2.233 5.893-1.43 1.563-3.37 2.44-5.391 2.44ZM13.369 5.768c-1.264 0-2.476.549-3.37 1.525-.893.977-1.396 2.302-1.396 3.683v28.125c0 1.382.503 2.706 1.396 3.683.894.977 2.106 1.526 3.37 1.526h20.013c1.264 0 2.476-.55 3.37-1.526.893-.977 1.395-2.301 1.395-3.683V10.976c0-1.381-.502-2.706-1.396-3.683-.893-.976-2.105-1.525-3.37-1.525H13.37Z"
                fill="#fff"
            />
        </svg>
    )
}

export default Application
