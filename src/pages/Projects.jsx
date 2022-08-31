import React, {useContext, useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {LayoutContext} from '@components/Layout/Context/LayoutContextProvider'
import projects from '@assets/projects/projects'
import Card from '@components/Card/Card'

const Projects = () => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    const {openMenu, setOpenMenu} = useContext(LayoutContext);

    const porjectListRef = useRef([]);

    useEffect(() => {
        if(!openMenu)setOpenMenu(true)
    }, [])

    useEffect(()=>{

        const timeline = gsap.timeline()
        gsap.utils.toArray(porjectListRef.current.children).forEach( card => {
            timeline.from(card, {
                opacity:0, 
                duration:.7
            })
        })
    },[])

    return (
        <div className='projects-page' ref={porjectListRef}>
            { projects.map( projectArgs =>  <Card key={projectArgs.id} {...projectArgs} /> )}
        </div>
    )
}

export default Projects
