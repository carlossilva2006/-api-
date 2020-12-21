
const express = require('express');
const app = express();
//const morgan = require('morgan');
const argv = require('./config/yargs').argv;
const persona = require('./src/form-perso');
const colors =  require('colors');

// Comentario: 21/12/2020

let comando = argv._[0];

switch (comando) {
    case 'agregar':
        let personaMas = persona.agregar(argv.rut, argv.nombres, argv.apellidoPaterno, argv.apellidoMaterno);
        console.log(personaMas);
        break;

    case 'listar':
        
        let lista = persona.getListado();
        
        for( let list of lista) {
            console.log('========== Personas =================='.yellow);
            console.log('=== '.yellow,'Rut               :',list.rut);
            console.log('=== ' .yellow,'Nombres           :',list.nombres);
            console.log('=== '.yellow,'Apellido Paterno  :',list.apellidoPaterno);
            console.log('=== '.yellow,'Apellido Materno  :',list.apellidoMaterno);
            console.log('======================================'.yellow);
        }
        break;
            
    case 'actualizar':

        let actualizado = persona.actualizar(argv.rut, argv.nombres, argv.apellidoPaterno, argv.apellidoMaterno);
        console.log(actualizado);
    break;

    case 'borrar':

        let borrado = persona.borrar(argv.rut, argv.nombres, argv.apellidoPaterno, argv.apellidoMaterno);
        console.log(borrado);
    break;

    default:
        console.log('Comando invalido');
        break;
}

