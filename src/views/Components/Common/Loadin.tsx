import React from 'react';
import loading from '../../../assets/svg/loading.svg'
const Loadin = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <img src={loading} alt="" />
        </div>
    );
};

export default Loadin;