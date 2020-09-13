import { myname } from './utility/constant';
var express = require('express');

var app = express();


app.get('/', (req, res) => {
    res.send('Hello This  sample express app written by ' + myname);
});

app.post('/', (req, res) => {
    res.send(req);
});

app.listen(9030, () => {
    console.log('App listening on port 9030!');
});