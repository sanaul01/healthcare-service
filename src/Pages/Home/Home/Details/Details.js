import React from 'react';

const Details = ({ser}) => {
    const {name, image, description} = ser;
    return (
        <div>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Details;