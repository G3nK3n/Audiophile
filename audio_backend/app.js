const express = require('express');
const bodyParser = require('body-parser');

const headphonesRoutes = require('./routes/headphones-routes');

const app = express();

app.use(headphonesRoutes);

app.listen(5000);