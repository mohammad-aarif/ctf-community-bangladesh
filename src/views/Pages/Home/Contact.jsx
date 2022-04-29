import React, { useRef } from 'react';
import '../../../css/contact.css';
import emailjs from '@emailjs/browser';

import emailImage from '../../../assets/svg/email.svg'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_h5ludar', 'template_nl15fim', form.current, 'GkI3G-9_aHjvVj6e0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        console.log(e.form.value)
    };

    return (
        <div id='contact' className='px-32 py-5 bg-slate-900 text-white'>
            <h1 className='font-bold text-3xl text-center'>Contact Us</h1>
            <div className="flex justify-center items-center">
                <div className="contact-img">
                    <img style={{width: '100%'}} src={emailImage} alt=""/>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="name">Full Name</label><br />
                            <input type="text" name="from_name" id="" /><br />
                            <label htmlFor="email">E-mail</label><br />
                            <input type="email" name="reply_to" id="" /><br />
                            <label htmlFor ="textarea">Message</label><br />
                            <textarea name="message" id=""></textarea>
                            <input type="submit" name="submit" className="fab fa-facebook-f" value="Send Message" />
                    </form>
                </div>           
        </div>
        </div>
    );
};

export default Contact;