import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-slate-900'>
            <nav>
                <div className="flex px-12 items-center justify-between">
                    <div className="">
                        <img className='w-16' src="https://i.ibb.co/82dQW7f/ctfbd.png" alt="" />
                    </div>
                    <div className=''>
                        <ul className='flex justify-around py-3 text-white'>
                            <li className='px-3 hover:text-green-500'><Link to="/">Home</Link></li>
                            <li className='px-3 hover:text-green-500'><Link to="/">About</Link></li>
                            <li className='px-3 hover:text-green-500'><Link to="/">Service</Link></li>
                            <li className='px-3 hover:text-green-500'><Link to="/">Methodology</Link></li>
                            <li className='px-3 hover:text-green-500'><Link to="/">Team</Link></li>
                            <li className='px-3 hover:text-green-500'><Link to="/">Career</Link></li>
                            <li className='px-3 hover:text-green-500'><Link to="/">Blog</Link></li>
                            <li className='px-3 hover:text-green-500'><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;