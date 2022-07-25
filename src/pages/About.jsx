import React, {useContext, useEffect} from 'react'

import {LayoutContext} from '@components/Layout/Context/LayoutContextProvider'

const About = () => {
    const {openMenu, setOpenMenu} = useContext(LayoutContext);


    useEffect(() => {
        if(!openMenu)setOpenMenu(true)
    }, [])

    return (
        <div className={'pages'}>
            ABOUT ME
        </div>
    )
}

export default About
