const express = require('express');
const mqtt = require('mqtt');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = 3000;
const MQTT_SERVER = 'mqtt://mqtt.hsl.fi';
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'busTelemetry';

const mqttClient = mqtt.connect(MQTT_SERVER);

MongoClient.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
    const db = client.db(DB_NAME);

    mqttClient.on('connect', () => {
        mqttClient.subscribe('hfp/v2/journey/ongoing/vp/#');
        console.log('Connected to MQTT');
    });

    mqttClient.on('message', (topic, message) => {
        const data = JSON.parse(message.toString());
        db.collection('telemetry').insertOne(data);
    });
});

app.get('/buses', async (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
