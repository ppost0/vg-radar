const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const feedController = require('../feedController');


// Serve main HTML
app.get('/', feedController.loadFeed, (req, res) => {
  return res.sendFile(path.join(__dirname, '../public/index.html'));
})


// Catch-all route handler
app.use('/*', (req, res) => {
  res.status(404).send('Page not found - 404');
})


// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))