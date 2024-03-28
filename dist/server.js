"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require('path');
const app = (0, express_1.default)();
const PORT = 3000;
const feedController = require('./controllers/feedController');
// Serve static files
app.use(express_1.default.static(path.resolve(__dirname, '../public')));
// Serve main HTML
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// })
app.get('/feed', feedController.loadFeed, (req, res) => {
    console.log('reached router');
    return res.status(200).send(res.locals.feed);
});
// Catch-all route handler
app.use('/*', (req, res) => {
    return res.status(404).send('Page not found - 404');
});
// Global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
