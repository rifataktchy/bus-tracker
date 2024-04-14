
const mqtt = require('mqtt');

const MQTT_SERVER = 'mqtt://mqtt.hsl.fi';
const TOPIC = 'hfp/v2/journey/ongoing/vp/#';

const client = mqtt.connect(MQTT_SERVER);

client.on('connect', () => {
    console.log('Connected to MQTT server');
    client.subscribe(TOPIC);
});

client.on('message', (topic, message) => {
    const telemetry = JSON.parse(message.toString());
    console.log('Telemetry received:', telemetry);
});

function saveTelemetry(telemetry) {
}

module.exports = client;
