const express = require('express');
const http = require('http');
const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');
const app = express();
const BodyPaser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

app.use(morgan('dev'));
app.use(BodyPaser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});