import React, { useEffect, useState } from 'react';
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
            <h1>Team Member</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-3 py-16 px-16">
            {
                member.map(data => <TeamMembers key={data.email} name={data.name} role={data.role} img={data.img} email={data.email}/>)
            }
        </div>
        </div>
    );
};

export default Team;