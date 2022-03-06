import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </main>
    );
};

export default Main;