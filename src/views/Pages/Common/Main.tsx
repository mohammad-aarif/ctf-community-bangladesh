import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Member from '../Team/Member';
import Team from '../Team/Team';
const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='home' element={<Home/>} />
                <Route path='team' element={<Team/>} />
                <Route path='member/:username' element={<Member />} />
            </Routes>
        </main>
    );
};

export default Main;