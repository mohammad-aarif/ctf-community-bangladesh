import React, { useState } from 'react';
import TextAnimation from '../../Components/custom/TextAnimation';
import { useSpring, animated } from 'react-spring'
import skull from '../../../assets/svg/matrixskull.svg'
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
        <div className='flex justify-around items-center about-background'>
            <div className="w-50 py-7 relative px-14">
                <animated.div style={props} className="outer-circle relative flex items-center justify-center">                   
                </animated.div>
                <div className="animate-logo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="w-50 px-14">
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