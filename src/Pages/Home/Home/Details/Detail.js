import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Details from './Details';

const Detail = () => {
    const {servicId}= useParams();
    
    return (
        <div>
            <h2>details {servicId}</h2>
        </div>
    );
};

export default Detail;