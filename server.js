const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// BodyParser Middelware
app.use(bodyParser.json());

// Connect to Mongo
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use Routes
const items_router = require('./routes/api/items');
app.use('/api/items', items_router);

const port  = process.env.port || 5000;
app.listen(port, () => console.log(`the server running on the port ${port}`));








