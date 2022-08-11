import React, { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { TextPlugin } from "gsap/TextPlugin.js";
import {LayoutContext} from '@components/Layout/Context/LayoutContextProvider'

import 'styles/pages/about.scss'

const About = () => {
    gsap.registerPlugin(TextPlugin);
    const {openMenu, setOpenMenu} = useContext(LayoutContext);
    console.log(openMenu, setOpenMenu)


    useEffect(() => {
        if(!openMenu)setOpenMenu(true)
    }, [])

    useEffect( ()=>{
        const mainTimeline = gsap.timeline()

        const textTl1 = 'Hi, my name is Ruslan and I love to build the Web.';
        const textTl3 = 'I’m here to ';

        const textTl4 = 'Build ';
        const textTl5 = 'Learn ';
        const textTl6 = 'Grow ';
        const textTl7 = 'Make friends';
        const textTl8 = 'And help others do the same';

        const listTl1 = [ 'open-minded.',              'analytical.',                  'a good listener.'     ]
        const listTl2 = [ 'collaborative work.',       'challenge.',                   'constantly improving.']
        const listTl3 = [ 'honesty.',                  'quality.',                     'comradery.'           ]
        const listTl4 = [ 'being positive-oriented.',  'being receptive to feedback.', 'to have a goal.'      ]

        //timelines queue:
        mainTimeline.to('#box-text-1', { duration: 1.5, delay:1.5, text: textTl1, })
        mainTimeline.from(".start-phrase",  {
            y: 100,
            ease: "power4.out",
            delay: 1,
            duration:1,
            skewY: 7,
            stagger: {
              amount: 2
            }
        })

        function verticalTimeline(){
            const matrix = [listTl1, listTl2, listTl3, listTl4]
    
            for(let i = 0; i<matrix[0].length; i++){
                for(let j = 0; j<matrix.length; j++){
                    let localTimeline = gsap.timeline();
                    const selector = `#box-list-${j}`
                    localTimeline.to(selector, { duration: .5,  text: '', })
                    localTimeline.to(selector, { duration: 1,  text: matrix[j][i], })
                    mainTimeline.add(localTimeline) 
                }
            }
        }
        verticalTimeline()
        mainTimeline.to('#box-text-3', { duration: 2, delay:1, text: textTl3, })

        mainTimeline.to('#box-text-4', { duration: .7, delay:.2, text: textTl4, })
        mainTimeline.to('#box-text-5', { duration: .7, delay:.2, text: textTl5, })
        mainTimeline.to('#box-text-6', { duration: .7, delay:.2, text: textTl6, })
        mainTimeline.to('#box-text-7', { duration: .7, delay:.2, text: textTl7, })
        mainTimeline.to('#box-text-8', { duration: 2, delay:.5, text: textTl8, })


    }, [])

    return (
        <div className={'about-me-page'}>

            <span className='box-type-1' id='box-text-1'></span>

            <div className='text-block'>
                <div className='static-line-container'>
                    <div className='start-phrase'>I'm
                        <span className='box-type-2' id='box-list-0'></span>
                    </div>
                </div>
            </div>
            <div className='text-block'>
                <div className='static-line-container'>
                    <div className='start-phrase'>I like
                        <span className='box-type-2' id='box-list-1'></span>
                    </div>
                </div>
            </div>
            <div className='text-block'>
                <div className='static-line-container'>
                    <div className='start-phrase'>I value
                        <span className='box-type-2' id='box-list-2'></span>
                    </div>
                </div>
            </div>

            <div className='text-block'>
                <div className='static-line-container'>
                    <div className='start-phrase'>I think the key to growing and striving is
                        <span className='box-type-2' id='box-list-3'></span>
                    </div>
                </div>
            </div>
            
            <span className='box-type-1' id='box-text-2'></span>
            <span className='box-type-1' id='box-text-3'></span>

            <div clasName='text-group'>
                <span className='box-type-2' id='box-text-4'></span>
                <span className='box-type-2' id='box-text-6'></span>
                <span className='box-type-2' id='box-text-7'></span>
            </div>
            <span className='box-type-2 highlight final' id='box-text-8'></span>
        </div>
    )
}

export default About