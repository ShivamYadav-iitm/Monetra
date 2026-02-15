const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const transactions = require('./routes/transactions');

dotenv.config();
connectDB();

const app = express();

// Middleware

app.use(express.json()); // Allows us to use JSON data
app.use(cors());

app.use('/api/v1/transactions', transactions);

// Basic Route for testing
app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));