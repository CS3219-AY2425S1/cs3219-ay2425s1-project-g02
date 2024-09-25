const cors = require("cors"); 
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require('./routes/userRoutes');
const firebaseConfig = require("./config/firebaseConfig"); // Ensure Firebase is initialized
const app = express();

// Allow requests from http://localhost:3000 (production frontend) and http://localhost:5173 (development frontend) with credentials
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

// Handle preflight requests for all routes
app.options('*', cors());

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use('/', userRoutes);

module.exports = app;
