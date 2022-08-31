import React, {useState, useRef, useEffect, useContext} from 'react'

import ShapeGroupOuter from '@components/shapes/groups/ShapeGroupOuter/ShapeGroupOuter'

import {LayoutContext} from './Context/LayoutContextProvider'
import { useLocation } from '@reach/router';
import { Link } from "gatsby"
import { gsap } from "gsap";

import ContactForm from '@components/ContactForm/ContactForm'
import LinkCustom from '@components/atoms/LinkCustom/LinkCustom'
import Button from '@components/atoms/Button/Button'

import {FaLinkedin, FaGithub,FaHeart } from "react-icons/fa";
import {SiGmail, SiGatsby, SiReact} from "react-icons/si";
import pdf from '@assets/MyResume1.pdf'
import './../../styles/index.scss'
import './_layout.scss'


const Layout = ({children}) => {
    const {pathname} = useLocation()
    const { openMenu } = useContext(LayoutContext)

    const [contactFormIsOpen, setContactFormIsOpen ] = useState(false)
    const handleCloseForm = ( ) =>  setContactFormIsOpen(p=>!p) 

    
    //gsap
    const MainBoxRef = useRef();
    const queryInfoSection = gsap.utils.selector(MainBoxRef);

    const contactBtnRef = useRef();

    useEffect(() => {
        let tl = gsap.timeline();
        if(openMenu && pathname !== '/'){
            tl.to(MainBoxRef.current, {
                height:'100%',
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
            tl.to( queryInfoSection('.footer'),{ opacity:1, duration:.5 } )
        } 
    },[openMenu]);


    useEffect(() => {
        let tl = gsap.timeline();
        if(!openMenu && pathname === '/') {
            tl.to( contactBtnRef.current, {
                y:'0vh',
                left:'-100vw',
                duration:.4,
                ease:'expo.in'
            })
            tl.to( queryInfoSection('.info-container'),{ opacity:0, duration:.4 } )
            tl.to( queryInfoSection('.footer'),{ opacity:0, duration:.2 } )
            tl.to(MainBoxRef.current, {
                height:'30%',
                borderRadius:'25% 25% 0 0 ',
                duration:1,
                ease:'expo.inOut'
            })
        }
    },[openMenu]);

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
                        <LinkCustom  large link={'https://github.com/useinov12'}>
                            <FaGithub/>
                        </LinkCustom>
                        <LinkCustom  large>
                            <SiGmail onClick={()=>handleCloseForm()}/>
                        </LinkCustom>
                    </div>
                    <LinkCustom medium link={pdf}>
                        Resume
                    </LinkCustom>
                </div>
                
                {contactFormIsOpen && <ContactForm handleCloseForm={handleCloseForm}/>}
                
                
                <div ref={MainBoxRef} className={`main-content ${openMenu ? 'expanded' : '' }`}>
                    <div className={'content'}>
                    
                        <nav className='navigation'>
                            <div ref={contactBtnRef}  className={'button--contacts-container'}>
                                <Link to="/">
                                    <Button 
                                        label={'contacts'}
                                        className={'button--nav'} 
                                        active={pathname === '/' ? true:false }
                                    />
                                </Link>
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
                        <div  className={'page-container'}>
                            {children}
                        </div>
                    </div>

                    <div className="footer">
                        Built with <FaHeart/> using <SiReact/> and <SiGatsby/> 
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Layout
