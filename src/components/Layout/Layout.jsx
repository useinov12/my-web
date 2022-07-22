import React, {useState} from 'react'
// import Contacts from 'components/Contacts'
// import Main from 'components/Main/Main'
// import ContactForm from 'components/ContactForm/ContactForm'
import LinkCustom from 'components/atoms/LinkCustom'

import './layout.scss'

const Layout = () => {

    const [contactFormIsOpen, setContactFormIsOpen ] = useState(false)

    // const handleCloseForm = ( ) => { setContactFormIsOpen(p=>!p)}
    return (
        <div className={'layout'} >
            <div className={'contacts'}>
                <h2>CONTACTS</h2>
                <div className={'contacts-links-container'}>
                    <LinkCustom large  link={'https://www.linkedin.com/in/ruslan-useinov-330b5a23a/'}> 
                        <FaLinkedin />
                    </LinkCustom>
                    <LinkCustom large link={'https://github.com/ruslaaaan'}>
                        <FaGithub/>
                    </LinkCustom>
                    <LinkCustom large onClick={()=>setContactFormIsOpen(!contactFormIsOpen)} >
                        <SiGmail/>
                    </LinkCustom>
                </div>
            </div>
            {/* <ContactForm 
                handleCloseForm={handleCloseForm} 
                contactFormIsOpen={contactFormIsOpen}
            /> */}
            {/* <Main/> */}
        </div>
    )
}

export default Layout
