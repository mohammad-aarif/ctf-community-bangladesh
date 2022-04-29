import React from 'react';
import '../../../css/events.css'
import PrimaryButton from '../../Components/Common/PrimaryButton';
const Events = () => {
    return (
        <div className='px-32 py-5'>
            <h1 className="text-2xl font-bold text-center">Upcoming Events</h1>
        <div className='px-32 flex items-center justify-center events-section py-5'>
            <div className='px-16' style={{width: '50vw'}}>
                <img  className="events-image" src="https://i.ibb.co/RzFd1SG/Screenshot-2021-12-02-104919.jpg" alt="" />
            </div>
            <div>
                <h1 className='text-3xl font-bold'>Lorem ipsum dolor sit amet.</h1>
                <h3 className='text-xl font-medium'>12 oct, 2022 (3:30AM)</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste optio qui magnam quasi in nam, enim odio quibusdam ex ad cum omnis reprehenderit animi accusamus porro numquam eum officiis.</p>
                <PrimaryButton name='Join Now' dict='/'/>
            </div>
        </div>
        </div>
    );
};

export default Events;