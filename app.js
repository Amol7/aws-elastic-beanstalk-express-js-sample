const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello James Bond. Welcome to Ireland, my Friend !!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
