import React from 'react';
import './Home.css'
import Services from './HomePageService/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className="mt-3">
            <Banner></Banner>
            <div className="home-page">
            <Services></Services>
            <div className="services" style={{backgroundImage: `url(https://i.ibb.co/PxRjG3r/logo2.jpg)`}}>
            </div>
            </div>
        </div>
    );
};

export default Home;