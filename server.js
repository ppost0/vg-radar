const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve main HTML
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, './index.html'));
})


// Catch-all route handler
app.use('/*', (req, res) => {
  res.status(404).send('Page not found - 404');
})




app.listen(PORT, () => console.log(`Listening on port ${PORT}`))