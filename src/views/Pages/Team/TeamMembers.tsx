import React from 'react';
import '../../../css/Team.css'
const TeamMembers = () => {
    return (
        <div>
            <h1>Team Members</h1>
            <div className="grid grid-cols-4 gap-3 py-16 px-16">
                <div className="team-member text-center mx-auto">
                    <img className='team-img' src="https://i.ibb.co/svZfJ6q/wells-chan-l3hwxn-GJXn8-unsplash.jpg" alt="" />
                    <h1 className="text-3xl font-medium">Name Namee</h1>
                    <h2 className="text-xl">Position</h2>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;