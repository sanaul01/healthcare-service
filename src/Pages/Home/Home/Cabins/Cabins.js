import React from 'react';
import './Cabins.css'

const Cabins = ({cabin}) => {
    const {name, facility, price, image} = cabin;
    return (
        <div className="single-cabin">
            <img className="w-100" src={image} alt="" />
            <h3>{name}</h3>
            <p>{facility}</p>
            <h5>${price} in a day</h5>
        </div>
    );
};

export default Cabins;