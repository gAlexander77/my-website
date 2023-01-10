import React from 'react';
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import '../style/components/Contact.css';

function Contact(props){

    return(
        <div className="contact-container">
            <h1 className="contact-title">My Contacts</h1>
            <div className="contact-list-of-contacts">        
                <button className="btn"><BsGithub/>Github</button>
                <button className="btn"><BsLinkedin/>LinkedIn</button>
                <p><MdEmail/>galexander1099@gmail.com</p>
            </div>
        </div>
    );
}

export default Contact;