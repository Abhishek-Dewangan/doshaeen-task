const express = require('express');
const cors = require('cors');
const connection = require('./db');
const users = require('./routes/users');

const app = express();
connection();

app.use(express.json());
app.use(cors());

app.use('/api/users', users);

app.listen(8080, () => {
  console.log('Application is running on http://localhost:8080');
});
