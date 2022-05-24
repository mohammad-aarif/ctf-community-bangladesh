import React, { useState } from 'react';
import TextAnimation from '../../Components/custom/TextAnimation';
import { useSpring, animated } from 'react-spring'
import logo from '../../../assets/svg/layer1.svg'
import '../../../css/About.css'
const About = () => {
    const [flip, setFlip] = useState(false)
    const props = useSpring({
      to: { transform: 'rotate(360deg)' },
      from: { transform: 'rotate(0deg)' },
      reset: true,
      reverse: flip,
      delay: 3000,
    //   config: config.molasses,
      onRest: () => setFlip(!flip),
    })
 
    return (
        <div id='about' className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-7 about-background'>
            <div className="my-auto py-7 col-span-3 flex items-center justify-center relative sm:px-2 lg:px-14">
                <animated.div style={props} className="outer-circle">                   
                </animated.div>
                <div className="animate-logo">
                    <img src={logo} alt="" />
                </div>
            </div>


            <div style={{paddingLeft: '20px'}} className="lg:px-14 sm:px-8 my-auto lg:col-span-4">
                <h1 className="text-gray-600 text-xl font-bold">About</h1>
                <div className="text-green-700">
                    <TextAnimation toggle={flip} text="Ctf Bangladesh" />
                </div>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus consequuntur consectetur obcaecati repellat eum! Deleniti optio dolorem ut excepturi necessitatibus odio ea, incidunt fugit rerum velit commodi rem totam?
                </p>
            </div>
     </div>
    );
};

export default About;