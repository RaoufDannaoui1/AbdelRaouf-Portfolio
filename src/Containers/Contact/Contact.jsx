import React from 'react'
import './Contact.css'
import ContactHeader from '../../Components/ContactHeader/ContactHeader'
import MailForm from '../../Components/MailForm/MailForm'
import logo from './AbdelRaouf_logo2.png'
export default function Contact() {
    return (
        <div>
            <section id="contact" className="contact-section">
            <ContactHeader />
            <MailForm />
            <div className="footer">
                <img src={logo} alt="logo" />
                <span>© AbdelRaouf Dannaoui 2021</span>
                <span>All rights reserved</span>
            </div>
            </section>
        </div>
    )
}
