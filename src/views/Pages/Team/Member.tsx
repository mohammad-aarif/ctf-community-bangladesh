import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
type ParaType = {
    email: string;
}
const Member = () => {
    const {email} = useParams<ParaType>()
    // console.log(email);
    const [member, setMember] = useState<MemberType[]>([])
    // const [data, setData] = useState<MemberType>({})
    useEffect(()=> {
        fetch('/member.json')
        .then(res => res.json())
        .then(data => setMember(data))
    }, [])
    console.log(member);
    const memberData = member.find(data => data.email === email)
    // setData(memberData)
    // const {name, role, desc, img, facebook, twitter, github, linkedin} = data
    
    return (
        <div className='py-16 px-16'>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3 ">
                <div className="member-img">
                    <img src={memberData?.img} alt="" />
                </div>
                <div className="member-details">
                    <h1 className="font-medium text-2xl">{memberData?.name}</h1>
                    <p className=''>{memberData?.role}</p>
                    <hr />
                    <h1 className="font-medium text-2xl">About Me</h1>
                    <p>{memberData?.desc}</p>
                    <hr />
                    <br />
                    <div className="flex py-3 field items-center">
                        <div className="pl-2 font-medium">Email</div>
                        <div className="pl-16">
                            <p>{memberData?.email}</p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="flex py-3 field items-center">
                        <div className="pl-2 font-medium">Score</div>
                        <div className="pl-16">
                            <p>{memberData?.score}</p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="flex py-3 field items-center">
                        <a className='pl-3' href={memberData?.github}><BsGithub/></a>
                        <a className='pl-3' href={memberData?.facebook}><BsFacebook/></a>
                        <a className='pl-3' href={memberData?.twitter}><BsTwitter/></a>
                        <a className='pl-3' href={memberData?.linkedin}><BsLinkedin/></a>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Member;