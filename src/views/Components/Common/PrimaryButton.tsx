import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({name, dict}:{name: string; dict: string}) => {
    return (
        <Link className='bg-green-500 hover:bg-green-700 text-white px-3 rounded my-3 inline-block py-2' to={dict}>{name}</Link>
    );
};

export default PrimaryButton;
