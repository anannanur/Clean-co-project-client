import React, { useEffect, useState } from 'react';
import fetcher from '../api';


const Services = () => {

    const [services, setServices] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:5000/services')
    //         .then(res => setServices(res.data))
    // }, [])

    // async-await with axios 
    //IIFE 1.(function(){})()
    //IIFE 2. const name => {} name()
    //IIFE 3. (async()=>{})()

    useEffect(()=>{
        (async () => {
            const res = await fetcher.get('http://localhost:5000/services');
            setServices(res.data)
        })()
    }, [])

    return (
        <div className='mt-48'>
            <h1>{services[0]?.name}</h1>
        </div>
    );
};

export default Services;