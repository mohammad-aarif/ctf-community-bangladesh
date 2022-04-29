import React from 'react';
import '../../../css/contact.css'
import emailImage from '../../../assets/svg/email.svg'
const Contact = () => {
    return (
        <div className='px-32 py-5 bg-slate-900 text-white'>
            <h1 className='font-bold text-3xl text-center'>Contact Us</h1>
            <div className="flex justify-center items-center">
                <div className="contact-img">
                    <img style={{width: '100%'}} src={emailImage} alt=""/>
                </div>
                <div className="contact-form">
                    <form action="">
                            <label htmlFor="name">Full Name</label><br />
                            <input type="text" name="name" id="" /><br />
                            <label htmlFor="email">E-mail</label><br />
                            <input type="email" name="email" id="" /><br />
                            <label htmlFor ="textarea">Message</label><br />
                            <textarea name="textarea" id=""></textarea>
                            <input type="submit" name="submit" className="fab fa-facebook-f" value="Send Message" />
                    </form>
                </div>           
        </div>
        </div>
    );
};

export default Contact;