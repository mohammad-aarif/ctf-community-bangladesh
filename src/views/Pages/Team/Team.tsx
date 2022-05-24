import React, { useEffect, useState } from 'react';
import Loadin from '../../Components/Common/Loadin';
import TeamMembers from './TeamMembers';


const Team = () => {
    const [member, setMember] = useState<MemberType[]>([])
    useEffect(()=> {
        fetch('/member.json')
        .then(res => res.json())
        .then(data => setMember(data))
    })
    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>Management Team</h1>
            <hr />
                {member.length === 0 ? <Loadin />
                :
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-3 py-16 px-16">
            {
                member.map(data => <TeamMembers key={data.username} name={data.name} role={data.role} img={data.img} username={data.username}/>)
            }
        </div>
        }
        </div>
    );
};

export default Team;