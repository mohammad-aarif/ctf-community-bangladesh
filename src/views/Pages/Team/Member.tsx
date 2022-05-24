import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
type ParaType = {
    username: string;
}
const Member = () => {
    const {username} = useParams<ParaType>()
    console.log(username);
    const [member, setMember] = useState<MemberType[]>([])
    // const [data, setData] = useState<MemberType>({})
    useEffect(()=> {
        fetch('/member.json')
        .then(res => res.json())
        .then(data => setMember(data))
    }, [])
    console.log(member);
    const memberData = member.find(data => data.username === username)
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
                    <br />
                    <h1 className="font-medium text-xl">About Me</h1>
                    <p>{memberData?.desc}</p>
                    <hr />
                    <br />
                    <div className="grid py-3 field grid-cols-5 gap-4">
                        <div className="pl-2 col-span-1 font-medium">Field Of Interest</div>
                        <div className="pl-3 col-span-4">
                            <p>{memberData?.interest}</p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="grid py-3 field grid-cols-5 gap-4">
                        <div className="pl-2 col-span-1 font-medium">Achievment</div>
                        <div className="pl-3 col-span-4">
                            <p>{memberData?.achievment}</p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="grid py-3 field grid-cols-5 gap-4">
                        <div className="pl-2 col-span-1 font-medium">Education</div>
                        <div className="pl-3 col-span-4">
                            <p>{memberData?.education}</p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="grid py-3 field grid-cols-5 gap-4">
                        <div className="pl-2 col-span-1 font-medium">Work Experience</div>
                        <div className="pl-3 col-span-4">
                            <p>{memberData?.experience}</p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="grid py-3 field grid-cols-5 gap-4">
                        <div className="pl-2 col-span-1 font-medium">E-mail</div>
                        <div className="pl-3 col-span-4">
                            <p>{memberData?.email}</p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="grid py-3 field grid-cols-5 gap-4">
                        <div className="pl-2 col-span-1 font-medium">Website</div>
                        <div className="pl-3 col-span-4">
                            <p>{memberData?.website}</p>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="flex py-3 field items-center">
                        <a className='pl-3' href={memberData?.facebook}><BsFacebook/></a>
                        <a className='pl-3' href={memberData?.twitter}><BsTwitter/></a>
                        <a className='pl-3' href={memberData?.linkedin}><BsLinkedin/></a>
                        <a className='pl-3' href={memberData?.github}><BsGithub/></a>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Member;