import React from 'react';
import { useEffect, useState } from 'react';

const ApiContext = () => {
    const [vehicles, setVehicles] = useState([]);
    console.log(vehicles)

    useEffect(() => {
        fetch('https://travel-with-us-server.vercel.app/vehicles')
        .then(res => res.json())
        .then(data => setVehicles(data))
    } , [])
    
    return (
        <div>
            
        </div>
    );
};

export default ApiContext;