import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, services, description, image} = service;
    return (
        <div className="single-container">
            <img className="image" src={image} alt="" />
            <h2>{name}</h2>
            <h3>{services}</h3>
            <p>{description}</p>
            <Link to={`/detail/${id}`}>
            <button className="btn btn-warning">detail {name}</button>
            </Link>
        </div>
    );
};

export default Service;