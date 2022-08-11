import React, {useContext, useEffect} from 'react'

import {LayoutContext} from '@components/Layout/Context/LayoutContextProvider'
import projects from '@assets/projects/projects'
import Card from '@components/Card/Card'

const Projects = () => {
    const {openMenu, setOpenMenu} = useContext(LayoutContext);


    useEffect(() => {
        if(!openMenu)setOpenMenu(true)
    }, [])

    return (
        <>
            {
                projects.map( projectArgs => <Card key={projectArgs.heading} {...projectArgs} />)
            }
        </>
    )
}

export default Projects
