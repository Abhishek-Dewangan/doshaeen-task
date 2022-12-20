const express = require('express');
const cors = require('cors');
const connection = require('./db')

const app = express();
connection();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(8080, () => {
  console.log('Application is running on http://localhost:8080');
});
