const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const loginRoutes = require('./app');


const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(bodyParser.json());

// Routes
app.use('/api', loginRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
