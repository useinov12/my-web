import React, { useState, useEffect } from 'react'
import { Axios, db } from './../../../firebase/firebaseConfig.js'
import { addDoc, collection } from "firebase/firestore";

import './ContactForm.scss'

const ContactForm = ({contactFormIsOpen, handleCloseForm}) => {
    const [formData, setFormData] = useState({})
    
    const [status, setStatus] = useState('')
    const [message, setMessage] = useState('')

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
            setStatus('success')
            setMessage('Message sent successfully!')
            try {
                await addDoc(collection(db, "emails"), {
                    company:formData.company,
                    email: formData.email,
                    message: formData.message,
                    name: formData.name,
                    time: new Date(),
                });
            } catch (e) {
                setStatus('error')
                setMessage('Message not sent :(')
            }
        })
        .catch(e =>{
            setStatus('error')
            setMessage('Message not sent :(')
        })
    }

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setStatus('')
            setMessage('')
            console.log('Change')
        }, 3000)
        return () => clearTimeout(timer);
    }, [status])

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
                    />
                    <button type='submit' className={'contact-form-submit-button'}>
                        Submit
                    </button>

                    <div className={`status-message ${status}`}>
                        {message}
                    </div>
                </form>


            </div>

        </div>
    )
}


export default ContactForm