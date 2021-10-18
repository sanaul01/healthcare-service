import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const {servicId}= useParams();
    return (
        <div>
            <h2>details {servicId}</h2>
        </div>
    );
};

export default Detail;