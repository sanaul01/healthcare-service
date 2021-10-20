import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './services.css'



const Services = () => {

    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./homePageService.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <div className="service">
            {
                services.map(service =><Service
                key ={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;