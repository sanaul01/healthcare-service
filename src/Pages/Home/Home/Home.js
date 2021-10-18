import React from 'react';
import Service from './Service/Service';
import './Home.css'
import Services from './HomePageService/Services';

const Home = () => {
    return (
        <div className="home-page">
            <Services></Services>
            <div className="services" style={{backgroundImage: `url(https://i.ibb.co/PxRjG3r/logo2.jpg)`}}>
            <h1 className="pt-5">This is home page</h1>
            </div>
        </div>
    );
};

export default Home;