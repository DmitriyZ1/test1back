import exp from 'express';
const app = exp();

app.get('/', function(req,res) {                   
   res.send({log: 10})
})

app.listen(3001, function() {      
    console.log('conect');
});