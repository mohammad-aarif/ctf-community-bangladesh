import React, {useEffect, useState} from 'react';

const Greeting = () => {
    const [greetings, setGreetings] = useState('')
    const time = 19 //new Date().getHours()
    useEffect(()=>{
        if(time > 18 && time < 23){
            setGreetings('Good Evening!')
        }
        if(time > 12 && time <= 18){
            setGreetings('Good Afternoon!')
        }
        if(time > 4 && time <= 12){
            setGreetings('Good Morning!')
        }
        if(time < 5){
            setGreetings('Good Night!')
        }
    }, [])
    console.log(time, greetings);
    
    return (
        <>
            {greetings}
        </>
    );
};

export default Greeting;