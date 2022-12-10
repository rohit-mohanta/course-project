'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'http://alb-1765189401.us-east-1.elb.amazonaws.com/app';

// App
const app = express();
app.get('/*', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);