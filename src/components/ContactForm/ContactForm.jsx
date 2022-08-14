import React, { useState, useEffect } from 'react'
import { Axios, db } from './../../../firebase/firebaseConfig.js'
import { addDoc, collection } from "firebase/firestore";

import './ContactForm.scss'

const ContactForm = ({contactFormIsOpen, handleCloseForm}) => {
    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setFormData({
            name: '',
            company:'',
            email: '',
            message: '',
        })
    }
    const sendEmail = () => {
    Axios.post(
        'https://us-central1-personal-web-85b86.cloudfunctions.net/submit',
        formData
    )
    .then( async (res) => {
        try {
            await addDoc(collection(db, "emails"), {
                company:formData.company,
                email: formData.email,
                message: formData.message,
                name: formData.name,
                time: new Date(),
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    })
}

    return (
        <div className={'contact-form-window'}>
           <div className={'contact-form-container'}>
                <button onClick={()=>handleCloseForm()} className='close-contact-form-btn'>Close</button>
                <h2>Contact Me</h2>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={updateInput}
                        value={formData.name || ''} />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        onChange={updateInput}
                        value={formData.company || ''} />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={updateInput}
                        value={formData.email || ''} />
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Message"
                        onChange={updateInput}
                        value={formData.message || ''}
                    ></textarea>
                    <button type='submit' className={'contact-form-submit-button'}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}


export default ContactForm