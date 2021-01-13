import dotenv from 'dotenv';
const express = require('express');
const routes = require('./routes');

dotenv.config();

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

module.exports = app;