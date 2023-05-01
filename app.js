import exp from 'express';
const app = exp();

import config from './config.js';
import data from './data.js';


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/prikol', function(req,res) {
    console.log(req.query);

    res.send(data.arr)

});       

app.listen(config.port, function() {      
    console.log('port :' + config.port);
});