import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TelemetryList = () => {
  const [telemetry, setTelemetry] = useState([]);

  useEffect(() => {
    const fetchTelemetry = async () => {
      const response = await axios.get('/telemetry');
      setTelemetry(response.data);
    };
    fetchTelemetry();
  }, []);

  return (
    <div>
      <h2>Telemetry Data</h2>
      <ul>
        {telemetry.map((data) => (
          <li key={data._id}>
            {
              
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TelemetryList;
