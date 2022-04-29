import React from 'react';
import About from './About';
import Contact from './Contact';
import Events from './Events';
import HeaderBanner from './HeaderBanner';

const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <About />
            <Events />
            <Contact />
        </div>
    );
};

export default Home;

