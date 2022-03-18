import React, { useEffect, useState } from 'react';
import matrix from '../../../assets/videos/matrix.mp4'
import '../../../css/header-banner.css'
import PrimaryButton from '../../Components/Common/PrimaryButton';
import Greeting from '../../Components/custom/Greeting';
import TextAnimation from '../../Components/custom/TextAnimation';
const HeaderBanner = () => {
    const [toggle, setToggle] = useState(false)

    // useEffect(() => {
    //     const textAnimation = ():void => {
    //         setToggle(!toggle)
    //         console.log(new Date().getSeconds());
    //     }    
    //     setInterval(textAnimation, 3000)
    // })
    // console.log(toggle);
    
    return (
        <div>
            <div className="header-banner">
                <video className='' autoPlay loop muted>
                    <source src={matrix}/>
                </video>
                <div className="header-overlay bg-green-800">
                    <div className="banner-text py-60 pl-20">                    
                        <h3 className='text-gray-300'><Greeting /></h3>
                        <div className="text-white">
                        <TextAnimation toggle={toggle} text='Hack the World!'/>
                        </div>
                        <h2 className='text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                        <PrimaryButton name='Learn More' dict='/'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;