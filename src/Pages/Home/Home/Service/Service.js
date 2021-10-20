import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, services, description, image} = service;
    return (
        <div className="single-container">
            <img className="image w-100" src={image} alt="" />
            <h4>{name}</h4>
            <h4>{services} hours</h4>
            <p>{description}</p>
            <Link to={`/detail/${id}`}>
            <button className="btn btn-warning">detail {name}</button>
            </Link>
        </div>
    );
};

export default Service;