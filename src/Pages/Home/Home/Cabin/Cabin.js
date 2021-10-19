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
        <div className="container my-3">
            <h2 className="text-center my-5">Our Cabins</h2>
            <div className="cabin-container">
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