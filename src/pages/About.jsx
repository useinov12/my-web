import React, { useContext, useEffect, useState } from 'react'
import gsap from 'gsap'
import { TextPlugin } from "gsap/TextPlugin.js";
import {LayoutContext} from '@components/Layout/Context/LayoutContextProvider'
import LinkCustom from '@components/atoms/LinkCustom/LinkCustom'
// import Button from '@components/atoms/Button/Button'

// import { FaPlay } from "react-icons/fa";

import pdf from '@assets/MyResume1.pdf'

import 'styles/pages/about.scss'

const About = () => {
    gsap.registerPlugin(TextPlugin);
    const {openMenu, setOpenMenu} = useContext(LayoutContext);

    // const [skipAnimations, setSkipAnimations] = useState(false)

    const mainTimeline = gsap.timeline()
    // const onSkipPressedTimeline = gsap.timeline()

    // const [currentTimeline, setCurrentTimeline] = useState(mainTimeline)

    useEffect(() => {
        if(!openMenu)setOpenMenu(true)
    }, [])

    useEffect( ()=>{
        triggerTimeline()
    }, [])


    // useEffect(() => {

    //     if(skipAnimations){
    //         mainTimeline.clear()
    //         triggerTimeline()
    //     }
    // }, [ skipAnimations ])



    function triggerTimeline(){

        //texta assets
        const textTl1 = `Hi! My name is Ruslan :)`;
        const textTl2 = 'I\'m a self-thaught web developer.';
        const textTl3 = 'And I love to build the Web!';
        const textTl4 = 'I’m here to';

        const textTl5 = 'Build';
        const textTl6 = 'Learn';
        const textTl7 = 'Grow';
        const textTl8 = 'Make friends';
        const textTl9 = 'And help others do the same';

        const listTl1 = [ 'open-minded ',             'analytical',                  'a good listener'      ];
        const listTl2 = [ 'collaborative work',       'challenge',                   'constantly improving' ];
        const listTl3 = [ 'honesty',                  'quality',                     'comradery'            ];
        const listTl4 = [ 'being positive-oriented',  'being receptive to feedback', 'to have a goal'       ];

        //timelines queue in top down order:
        mainTimeline.from('.image-wrap', { duration: .7, delay:.6, y:40, opacity:0 })

        mainTimeline.to('#box-text-1', { duration: 1, delay:.6, text: textTl1, })
        mainTimeline.to('#box-text-2', { duration: 1, delay:.6, text: textTl2, })
        mainTimeline.to('#box-text-3', { duration: 1, delay:.6, text: textTl3, })
        
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

        function verticalOrderTimeline(){
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
        verticalOrderTimeline()


        mainTimeline.to('#box-text-4',     { duration: 1.3, delay:1, text: textTl4, })
        mainTimeline.to('#box-text-5',     { duration: .5, delay:.2, text: textTl5 })
        mainTimeline.to('#box-text-6',     { duration: .5, delay:.2, text: textTl6 })
        mainTimeline.to('#box-text-7',     { duration: .5, delay:.2, text: textTl7 })
        mainTimeline.to('#box-text-8',     { duration: 1, delay:.5, text: textTl8 })
        mainTimeline.to('#box-text-9',     { duration: 1, delay:.5, text: textTl9 })
        mainTimeline.to('#link-to-resume', { duration: 1, delay:.5, opacity:1 })
    }


    return (
        <div className='about-me-page'>

            {/* <div className='skip-animations-btn-wrap'>
                <Button 
                    label={[<span>skip animations</span>, <FaPlay className='icon-on-button'/>]} 
                    className={'button--secondary'} 
                    active={false}
                    onClick={()=>setSkipAnimations(true)}
                />
            </div> */}

            <h2 className='heading'>Ruslan Useinov</h2>

            <div className='content-wrapper'>
                
                <div className='reverse-wrapper'>
                    <div className='text-wrap'>
                        <span className='box-type-1' id='box-text-1'></span>
                        <span className='box-type-1' id='box-text-2'></span>
                        <span className='box-type-1' id='box-text-3'></span>
                        
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
                    </div>
                    
                    <div className='image-wrap'></div>
                </div>


                <div className='text-block last'>
                    <div className='static-line-container'>
                        <div className='start-phrase'>
                            I belive that the key to grow is
                            <span className='box-type-2' id='box-list-3'></span>
                        </div>
                    </div>
                </div>

            </div>

            <div className='divider'/>

            <span className='box-type-1' id='box-text-4'></span>
            
            <div clasName='text-group'>
                <span className='box-type-2' id='box-text-5'></span>
                <span className='box-type-2' id='box-text-6'></span>
                <span className='box-type-2' id='box-text-7'></span>
                <span className='box-type-2' id='box-text-8'></span>
            </div>
            <span className='box-type-2 highlight final' id='box-text-9'></span>

            <div  className='link-to-resume' id='link-to-resume'>
                <LinkCustom medium link={pdf}>
                    Resume
                </LinkCustom>
            </div>
        </div>
    )
}

export default About