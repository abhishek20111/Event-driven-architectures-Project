const express = require('express');
const connectDB = require('./connection/db');
const consumeOrders = require('./consumer');
require('dotenv').config();
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 4004;
//collect server mtric(internal details)
const collectDefaultMetrics = client.collectDefaultMetrics;


//get data from server and throw it to endpoin
collectDefaultMetrics({register: client.register});


app.get('/metrics',async (req, res) => {
    res.setHeader('Content-Type', client.register.contentType);
    const metrics = await client.register.metrics();
    res.send(metrics);
});


connectDB();
consumeOrders();

app.get('/', (req, res) => {
    res.send('Consumer Service 3 is running...');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
