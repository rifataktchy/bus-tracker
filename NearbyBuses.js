import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NearbyBuses = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        axios.get('/api/buses', {
            params: {
                location: 'userLocation', 
            }
        })
        .then(response => {
            setBuses(response.data);
        })
        .catch(error => {
            console.error('Error fetching nearby buses:', error);
        });
    }, []);

    return (
        <div>
            <h2>Nearby Buses</h2>
            <ul>
                {buses.map(bus => (
                    <li key={bus.id}>{bus.name} - Next stop: {bus.nextStop}</li>
                ))}
            </ul>
        </div>
    );
};

export default NearbyBuses;
