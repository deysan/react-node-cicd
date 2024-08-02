const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('/data', (req, res) => {
  res.send('React Node CICD');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
