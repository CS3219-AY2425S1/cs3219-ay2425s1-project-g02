const express = require('express');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const loginRoutes = require('./app');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET_KEY || 'default-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Routes
app.use('/api', loginRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});