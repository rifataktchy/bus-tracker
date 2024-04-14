// index.js

const express = require('express');
const mqtt = require('mqtt');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// MQTT Client setup
const mqttClient = mqtt.connect('mqtt://mqtt.hsl.fi');

mqttClient.on('connect', function () {
    mqttClient.subscribe('vehicle/+/+/+/+/+/+');
});

mqttClient.on('message', function (topic, message) {
   
});

app.get('/telemetry', (req, res) => {
    res.json({ message: 'Search endpoint' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
