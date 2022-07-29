import React, { useState, useCallback } from 'react'
import {gsap} from 'gsap';


import PolygonHollow from '@components/shapes/PolygonHollow'
import SquareHollow from '@components/shapes//SquareHollow'
import Circle from '@components/shapes/Circle'
import Compass from '@components/shapes/Compass'
import SquareFull from '@components/shapes/SquareFull'
import Gear from '@components/shapes/Gear'
import Application from '@components/shapes/Application'
import './shape-group-outer.scss'


const getRandomColor = () =>{
    const list = ['#DFD46B', '#40B5F7', '#5CD89C', '#ffff']
    const randomIdx =  Math.floor(Math.random()*3)
    return list[randomIdx]
}

const ShapeGroupOuter = ({orient}) => {

    const [tl, setTl] = useState(() => gsap.timeline());

    const duration = 2

    const addAnimation = useCallback((animation, index) => {    
        tl.add(animation, index*.3)
    }, [tl]);

    const ShadowFilter = () =>{
        return (
            <svg >
            <defs>
                <filter id='inset-shadow'>
                {/* All SVG filter effects/primitives go in here */} 
                    {<feOffset
                        id='offset-shadow'
                        dx='1'
                        dy='3'
                    />}
                    <feGaussianBlur
                        stdDeviation='1.5'
                        result='offset-blur'
                    />
                    <feComposite
                        operator='out'
                        in='SourceGraphic'
                        in2='offset-blur'
                        result='inverse'
                    />
                    <feComposite
                        operator='out'
                        in='SourceGraphic'
                        in2='offset-blur'
                        result='inverse'
                    />
                    <feFlood
                        floodColor='black'
                        floodOpacity='.65'
                        result='color'
                    />
                    <feComposite
                        operator='in'
                        in='color'
                        in2='inverse'
                        result='shadow'
                    />
                    <feComposite
                        operator='over'
                        in='shadow'
                        in2='SourceGraphic'
                    /> 
                </filter>
            </defs>
        </svg>
        )
    }

    const shapes = [
        SquareHollow, Gear, SquareFull, PolygonHollow, SquareHollow, Application, Circle, Circle, Compass
    ]

    const finalPosXY = [
        [16, 0], [9, 2], [16, 7], [10, 9], [6, 12], [11, 12], [12, 17],[16, 14], [8, 17],
    ]
    

    return (
        <div className={`ShapeGroupOuter ${orient}`}>
            <ShadowFilter/>
            { shapes.map( (Shape, idx)=>{
                const color = getRandomColor();
                const position = orient === 'left' ? finalPosXY[idx][0] : -finalPosXY[idx][0]
                return <Shape key={idx} addAnimation={addAnimation} index={idx+1} x={position} color={color} duration={duration}/>
            })}

        </div>
    )
}

export default ShapeGroupOuter




{/* <SquareHollow 
addAnimation={addAnimation} 
index={1} 
x={16}
color={'#DFD46B'}
duration={duration}
/> */}
{/* <Gear 
addAnimation={addAnimation} 
index={2} 
x={9}
duration={duration}
/> */}
{/* <SquareFull 
addAnimation={addAnimation} 
index={3} 
x={16}
color={'#40B5F7'}
duration={duration}
/> */}
{/* <PolygonHollow 
addAnimation={addAnimation} 
index={4} 
x={10}
color={'#5CD89C'}
duration={duration}
/> */}
{/* <SquareHollow 
addAnimation={addAnimation} 
index={5} 
x={6}
color={'#40B5F7'}
duration={duration}
/> */}
{/* <Application 
addAnimation={addAnimation} 
index={6} 
x={12}
duration={duration}
/> */}
{/* <Circle 
addAnimation={addAnimation} 
index={7} 
x={11}
radius={15}
color={'#DFD46B'}
duration={duration}
/> */}
{/* <Circle 
addAnimation={addAnimation} 
index={8} 
x={7}
radius={20}
color={'#40B5F7'}
duration={duration}
/> */}