
const express = require('express');
const mqttClient = require('./mqttClient');
const apiRoutes = require('./api');

const app = express();

app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
