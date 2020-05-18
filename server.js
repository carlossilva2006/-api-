const express = require('express');
const app = express();
const persona = require('./src/form-perso');
const infor = require('./db/info.json')
const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.get('/usuario',(req, res) => {
  
    res.json('get Usuario');
    
})

app.post('/usuario',(req, res) => {
    
    let body = req.body;
    res.json({
        
    });
})


app.put('/usuario/:rut',(req, res) => {
    let id = req.params.rut;
    res.json({
        id
    });
    
})

app.delete('/usuario',(req, res) => {

    res.json('delete Usuario');
    
})

app.listen(3000, () => {

    console.log('Escuchando peticiones del puerto 3000');

});





















// let persona = {
    //     rut: '16.577.787-5',
    //     nombres: 'Carlos Matias',
    //     apellidoPaterno: ' Silva',
    //     apellidoMaterno: 'Muñoz',
    //     url : req.url
    // };
    // res.json(persona);
    // // listaPersona.push(persona); 
