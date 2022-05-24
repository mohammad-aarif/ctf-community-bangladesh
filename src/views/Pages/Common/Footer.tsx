import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className='bg-black py-5'>
            <img className='w-16 mx-auto' src="https://i.ibb.co/82dQW7f/ctfbd.png" alt="" />
            <p className='text-gray-500 font-medium text-center'> &copy; CTF Bangladesh Community 2022</p>
            <p className='text-green-500 text-center'>Join Our <a href="https://discord.gg/h7r58TpKVs">Discord</a></p>

            <div className="flex py-3 items-center justify-center">
                <a href='https://www.facebook.com/ctfcommunitybd'><BsFacebook style={{color: 'white'}}/></a>
                <a className='pl-3' href='https://twitter.com/ctfcommunitybd'><BsTwitter  style={{color: 'white'}}/></a>
                <a className='pl-3' href='https://www.linkedin.com/company/ctfcommunitybd'><BsLinkedin  style={{color: 'white'}}/></a>
                <a className='pl-3' href='https://www.youtube.com/channel/UCMy-tw0qXKSkYgTLJ1R9rqw/videos'><BsYoutube style={{color: 'white'}}/></a>
            </div>
        </div>
    );
};

export default Footer;