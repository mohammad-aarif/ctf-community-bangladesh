import React, { useRef } from 'react';
import '../../../css/contact.css';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si"

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
        <div style={{padding: '0 20px'}} id='contact' className='lg:px-32 md:px-28 py-5 bg-slate-900 text-white'>
            <h1 className='font-bold text-3xl text-center'>Contact Us</h1>
            <div className="">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
                    <div className = "px-7 py-3">
                        <FaMapMarkerAlt style={{fontSize: "60px", margin: '0 auto'}}/>
                        <p className="text-center text-lg">Internet</p>
                    </div>
                    <div className = "px-7 py-3">
                        <SiMinutemailer style={{fontSize: "60px", margin: '0 auto'}}/>
                        <p className="text-center text-lg">ctfcommunitybd@gmail.com</p>
                    </div>
                    <div className = "px-7 py-3">
                        <FaPhone style={{fontSize: "60px", margin: '0 auto'}}/>
                        <p className="text-center text-lg">+8801833*****3</p>
                    </div>
                </div>
                <div className="contact-form py-4">
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