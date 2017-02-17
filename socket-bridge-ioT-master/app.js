'use strict';

const http = require('http');

http.createServer((req, res) => {
    res.end('Testing Anyway..');
}).listen(process.env.PORT || 3000);
