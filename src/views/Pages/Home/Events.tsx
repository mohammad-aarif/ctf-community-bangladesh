import React from 'react';
import '../../../css/events.css'
import PrimaryButton from '../../Components/Common/PrimaryButton';
const Events = () => {
    return (
        <div id='events' className='px-32 py-5'>
            <h1 className="text-2xl font-bold text-center">Upcoming Events</h1>
        <div className='px-16 grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-1  py-5'>
            <div className='md:col-span-1 lg:col-span-3'>
                <img  className="events-image" src="https://miro.medium.com/max/1400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg" alt="" />
            </div>
            <div className='lg:col-span-4 md:col-span-2 lg:pl-16 md:pl-12'>
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