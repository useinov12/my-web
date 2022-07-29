import React, {useState, useRef, useEffect, useContext} from 'react'

import ShapeGroupOuter from '@components/shapes/groups/ShapeGroupOuter/ShapeGroupOuter'

import {LayoutContext} from './Context/LayoutContextProvider'
import { useLocation } from '@reach/router';
import { Link } from "gatsby"
import { gsap } from "gsap";

// import ContactForm from 'components/ContactForm/ContactForm'
import LinkCustom from '@components/atoms/LinkCustom/LinkCustom'
import Button from '@components/atoms/Button/Button'

import {FaLinkedin, FaGithub } from "react-icons/fa";
import {SiGmail} from "react-icons/si";

import './../../styles/index.scss'
import './_layout.scss'


const Layout = ({children}) => {
    const {pathname} = useLocation()
    const { openMenu } = useContext(LayoutContext)

    const [contactFormIsOpen, setContactFormIsOpen ] = useState(false)

    
    //gsap
    const MainBoxRef = useRef();
    const queryInfoSection = gsap.utils.selector(MainBoxRef);

    const contactBtnRef = useRef();

    useEffect(() => {
        let tl = gsap.timeline();
        if(openMenu && pathname !== '/'){
            tl.to(MainBoxRef.current, {
                height:'100vh',
                borderRadius:'0',
                duration:.8,
                ease:'expo.inOut'
            })
            tl.to( contactBtnRef.current, {
                y:'0vh',
                left: '4vw',
                duration:.6,
                ease:'expo.inOut'
            })
            tl.to( queryInfoSection('.info-container'),{ opacity:1, duration:.5 } )
        } 
    },[openMenu, pathname]);


    useEffect(() => {
        let tl = gsap.timeline();
        if(!openMenu && pathname === '/') {
            tl.to( contactBtnRef.current, {
                y:'0vh',
                left:'-70vw',
                duration:.4,
                ease:'expo.in'
            })
            tl.to( queryInfoSection('.info-container'),{ opacity:0, duration:.4 } )
            tl.to(MainBoxRef.current, {
                height:'30vh',
                borderRadius: '25% 25% 0 0',
                duration:.9,
                ease:'expo.inOut'
            })
        }
    },[openMenu, pathname]);

    useEffect(()=>{
        let tl = gsap.timeline()
        tl.to(queryInfoSection('.info-container'), { opacity:1, duration:.3} )
    },[pathname])



    return (
        <>
            <div className={'layout'} >
                <ShapeGroupOuter orient={'left'} />
                <ShapeGroupOuter orient={'right'}/>
                <div className={'contacts'}>
                    <h2>CONTACTS</h2>
                    <div className={'contacts-links-container'}>
                        <LinkCustom  large  link={'https://www.linkedin.com/in/ruslan-useinov-330b5a23a/'}> 
                            <FaLinkedin />
                        </LinkCustom>
                        <LinkCustom  large link={'https://github.com/ruslaaaan'}>
                            <FaGithub/>
                        </LinkCustom>
                        <LinkCustom  large onClick={()=>setContactFormIsOpen(!contactFormIsOpen)} >
                            <SiGmail/>
                        </LinkCustom>
                    </div>
                </div>
                {/* <ContactForm 
                    handleCloseForm={handleCloseForm} 
                    contactFormIsOpen={contactFormIsOpen}
                /> */}
                <div ref={MainBoxRef} className={`main-content ${openMenu ? 'expanded' : '' }`}>

                    
                    <nav className='navigation'>
                    <div ref={contactBtnRef}  className={'button--contacts-container'}>
                        {<Link to="/">
                            <Button 
                                label={'contacts'}
                                className={'button--nav'} 
                                active={pathname === '/' ? true:false }
                            />
                        </Link>}
                    </div>
                    <Link to="/About"  >
                        <Button 
                            label={'about'}
                            className={'button--nav'} 
                            active={pathname === '/About' ? true:false }
                        />
                    </Link>
                    <Link to="/Projects"  >
                    <Button 
                        label={'projects'}
                        className={'button--nav'} 
                        active={pathname === '/Projects' ? true:false }
                        />
                    </Link>

                    </nav>
                    <div  className={'info-container'}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
