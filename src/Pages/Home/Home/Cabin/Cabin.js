import React, { useEffect, useState } from 'react';
import Cabins from '../Cabins/Cabins';
import './Cabin.css'



const Cabin = () => {
    const [cabins, setCabins] = useState([]);
    useEffect(()=>{
        fetch('cabin.json')
        .then(res => res.json())
        .then(data => setCabins(data))
    }, [])
    return (
        <div className="container md-3">
            <h2 className="text-center cabin-title">Our Cabins</h2>
            <div className="cabin-container my-3">
                {
                    cabins.map(cabin => <Cabins
                    key={cabin.id}
                    cabin={cabin}
                    ></Cabins>)
                }
            </div>
        </div>
    );
};

export default Cabin;