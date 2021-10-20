import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Detail.css'

const Detail = () => {
    const {servicId}= useParams();
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('/homePageService.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
     const singleData= services.find(service =>service.id == servicId)
     console.log(singleData)
    return (
        <div className="text-center detail mx-auto">
            <img src={singleData?.image} alt="" />
            <h3>{singleData?.name}</h3>
            <h3>{singleData?.services} hours</h3>
            <p>{singleData?.description}</p>
        </div>
    );
};

export default Detail;