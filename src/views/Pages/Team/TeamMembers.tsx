import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/Team.css'
type MemberIntro ={
    name: string;
    img: string;
    role: string;
    username: string;
}
const TeamMembers: React.FC<MemberIntro> = ({name, role, img, username}) => {
    return (
        <div>
            <Link to={`/member/${username}`}>
                <div className="team-member text-center mx-auto">
                    <img className='team-img mx-auto' src={img} alt="" />
                    <h1 className="text-3xl font-medium">{name}</h1>
                    <h2 className="text-xl">{role}</h2>
                </div>
            </Link>
        </div>
    );
};

export default TeamMembers;