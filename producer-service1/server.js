const express = require('express');
const dotenv = require('dotenv');

// require('./producer');
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Producer Service 1 running on port ${PORT}`));
