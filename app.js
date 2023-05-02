import exp from 'express';
const app = exp();

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import config from './config.js';

import data from './data.js';

app.use(exp.static('client'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', function(req,res) {                   
    res.sendFile(__dirname +'/client/index.html');
    console.log(__dirname + '/');
})

app.get('/prikol', function(req,res) {
    console.log(req.query);
    res.send(data.arr)
});       


app.listen(config.port, function() {      
    console.log('port :' + config.port);
});