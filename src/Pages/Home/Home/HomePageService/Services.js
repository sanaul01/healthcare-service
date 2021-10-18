import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css'

// const homePageService = [
//     {
//         id: 101,
//         name: "Oparation Theater",
//         services: 24,
//         description: "In this mordern Section our life is also mordern. Now this time every one need a safe live and thinking this sence we have took a modarn tecknology. And for this causes We have enouth expart Doctors , Nurs, Employe and other services",
//         image:"https://i.ibb.co/B4fzdhL/Operating-theater-with-light-shining-on-empty-bed-Preparation-absence-organisation-medical-equipment.jpg"
//     },
//     {
//         id: 102,
//         name: "Ambulench Service",
//         services: 24,
//         description: "In this mordern Section our life is also mordern. Now this time every one need a safe live and thinking this sence we have took a modarn tecknology. And for this causes We have enouth expart Doctors , Nurs, Employe and other services",
//         image:"https://i.ibb.co/b2gsnD2/ambulanch.jpg"
//     },
//     {
//         id: 103,
//         name: "Laboratory",
//         services: 24,
//         description: "In this mordern Section our life is also mordern. Now this time every one need a safe live and thinking this sence we have took a modarn tecknology. And for this causes We have enouth expart Doctors , Nurs, Employe and other services",
//         image:"https://i.ibb.co/Tg4Tg9T/laboratory.jpg"
//     },
//     {
//         id: 104,
//         name: "Cabin",
//         services: 24,
//         description: "In this mordern Section our life is also mordern. Now this time every one need a safe live and thinking this sence we have took a modarn tecknology. And for this causes We have enouth expart Doctors , Nurs, Employe and other services",
//         image:"https://i.ibb.co/6N9R7yH/cabin.jpg"
//     },
//     {
//         id: 105,
//         name: "X-rey",
//         services: 24,
//         description: "In this mordern Section our life is also mordern. Now this time every one need a safe live and thinking this sence we have took a modarn tecknology. And for this causes We have enouth expart Doctors , Nurs, Employe and other services",
//         image:"https://i.ibb.co/QbXdKJB/x-rey.jpg"
//     },
//     {
//         id: 106,
//         name: "ECG",
//         services: 24,
//         description: "In this mordern Section our life is also mordern. Now this time every one need a safe live and thinking this sence we have took a modarn tecknology. And for this causes We have enouth expart Doctors , Nurs, Employe and other services",
//         image:"https://i.ibb.co/mt1GfH8/ecg.jpg"
//     },
//     {
//         id: 106,
//         name: "Ultra Sonography",
//         services: 24,
//         description: "In this mordern Section our life is also mordern. Now this time every one need a safe live and thinking this sence we have took a modarn tecknology. And for this causes We have enouth expart Doctors , Nurs, Employe and other services",
//         image:"https://i.ibb.co/947Dz0J/ultrasonography.jpg"
//     },
//     {
//         id: 106,
//         name: "City-scan",
//         services: 24,
//         description: "In this mordern Section our life is also mordern. Now this time every one need a safe live and thinking this sence we have took a modarn tecknology. And for this causes We have enouth expart Doctors , Nurs, Employe and other services",
//         image:"https://i.ibb.co/7bjpT7g/city-scan.jpg"
//     },
// ]

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('homePageService.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="service">
            {
                services.map(service =><Service
                key ={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;