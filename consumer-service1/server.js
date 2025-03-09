const express = require('express');
const connectDB = require('./connection/db');
const consumeOrders = require('./consumer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4002;

connectDB();
consumeOrders();

app.get('/', (req, res) => {
    res.send('Consumer Service 1 is running...');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
