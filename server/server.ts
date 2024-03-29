import express, { Application, Request, Response, NextFunction } from 'express';
const path = require('path');
const app: Application = express();
const PORT = 3000;

const feedController = require('./controllers/feedController');

// Serve static files
app.use(express.static(path.resolve(__dirname, '../public')));


// Serve main HTML
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// })

app.get('/feed', feedController.loadFeed, (req: Request, res: Response) => {
  console.log('reached router')
  return res.status(200).send(res.locals.feed);
})


// Catch-all route handler
app.use('/*', (req:Request, res:Response) => {
  return res.status(404).send('Page not found - 404');
})


// Global error handler
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));