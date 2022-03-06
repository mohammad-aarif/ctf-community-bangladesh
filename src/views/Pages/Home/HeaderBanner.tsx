import React from 'react';
import matrix from '../../../assets/videos/matrix.mp4'
import '../../../css/header-banner.css'
const HeaderBanner = () => {
    return (
        <div>
            <div className="header-banner">
                <video className='' autoPlay loop muted>
                    <source src={matrix}/>
                </video>
                <div className="header-overlay bg-green-800">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;