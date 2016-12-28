import express from 'express';
import bodyParser from 'body-parser';

import axios from 'axios';

import routes from './routes/index.js';

let app = express();

app.use(bodyParser.json({limit: '50mb'}));

app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    next(err);
});

// Kick off express server
let serverPort = process.env.SERVER_PORT || 6060;
app.listen(serverPort);
console.log('Server started on port: ', serverPort);

export default app;

