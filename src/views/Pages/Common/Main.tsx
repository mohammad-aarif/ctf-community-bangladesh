import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Member from '../Team/Member';
import TeamMembers from '../Team/TeamMembers';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='home' element={<Home/>} />
                <Route path='team' element={<TeamMembers/>} />
                <Route path='member' element={<Member />} />
            </Routes>
        </main>
    );
};

export default Main;