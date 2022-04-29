import React from 'react';

const Member = () => {
    return (
        <div>
            <h1>Name Namee</h1>
            <div className="flex">
                <div className="member-details">
                    <h1 className="font-medium text-2xl">Name Namee</h1>
                    <p className=''>Position</p>
                    <hr />
                    <h1 className="font-medium text-2xl">About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusantium alias, facere veritatis aspernatur voluptates incidunt vero ea sint, atque nisi aliquid est iure corrupti.</p>
                    <hr />
                    <div className="flex field items-center">
                        <div className="pl-2 font-medium text-xl">Field</div>
                        <div className="pl-16">
                            <p>Lorem ipsum dolor</p>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Member;