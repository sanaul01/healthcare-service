import React, { useEffect, useState } from 'react';
import Cabins from '../Cabins/Cabins';
import './Cabin.css'

// const cabin = [
//     {
//         id: 201,
//         name: "Business First Class",
//         facility: "AC, Freez, Clasical bed, Sofa, Table, Telivision, CC-Tv",
//         price: 200,
//         image: "https://i.ibb.co/BwWV5fy/cabin.jpg"
//     },
//     {
//         id: 202,
//         name: "Business Second Class",
//         facility: "AC, Clasical bed, Sofa, Table, Telivision, CC-Tv",
//         price: 170,
//         image: "https://rcmch.com.bd/images/cabin_new.jpg"
//     },
//     {
//         id: 203,
//         name: "Business Third Class",
//         facility: "Clasical bed, Sofa, Table, Telivision, CC-Tv",
//         price: 150,
//         image: "https://i.ibb.co/pPdPDck/cabin2.jpg"
//     },
//     {
//         id: 204,
//         name: "First Class",
//         facility: "Clasical bed, Sofa, Table, Telivision",
//         price: 125,
//         image: "https://i.ibb.co/WWCC5XM/cabin4.jpg"
//     },
//     {
//         id: 205,
//         name: "Second Class",
//         facility: "Clasical bed, Sofa, Table",
//         price: 100,
//         image: "https://i.ibb.co/6tdDQqv/cabin5.jpg"
//     },
//     {
//         id: 206,
//         name: "Third Class",
//         facility: "A Bed, Table, Chair",
//         price: 75,
//         image: "https://i.ibb.co/q0TCnpR/cabin7.jpg"
//     }
    
// ]

const Cabin = () => {
    const [cabins, setCabins] = useState([]);
    useEffect(()=>{
        fetch('cabin.json')
        .then(res => res.json())
        .then(data => setCabins(data))
    }, [])
    return (
        <div className="container my-3">
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