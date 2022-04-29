import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className='sticky z-10 top-0 position bg-slate-900'>
            <nav>
                <div className="flex px-12 items-center justify-between">
                    <div className="">
                        <img className='w-16' src="https://i.ibb.co/82dQW7f/ctfbd.png" alt="" />
                    </div>
                    <div className=''>
                        <ul className='flex justify-around py-3 text-white'>
                            <li className='px-3 hover:text-green-500'><Link to="/">Home</Link></li>
                            <li className='px-3 hover:text-green-500'><HashLink smooth to="/home#about">About</HashLink></li>
                            <li className='px-3 hover:text-green-500'><Link to="/team">Team</Link></li>
                            <li className='px-3 hover:text-green-500'><HashLink smooth to="/home#events">Events</HashLink></li>
                            <li className='px-3 hover:text-green-500'><HashLink smooth to="/home#contact">Contact</HashLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;