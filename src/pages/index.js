import React, {useContext, useEffect} from 'react'
import {LayoutContext} from '@components/Layout/Context/LayoutContextProvider'

const IndexPage = () => {
    const {openMenu, setOpenMenu} = useContext(LayoutContext);


    useEffect(() => {
        if(openMenu)setOpenMenu(false)
    }, [])

    return (
        <div className={'pages'}>
            
        </div>
    )
}

export default IndexPage
