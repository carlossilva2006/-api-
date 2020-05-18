
const fs = require('fs');

let listaPersona = [];

const guardarBD = () => {

    let data = JSON.stringify(listaPersona);
    fs.writeFile('db/info.json', data, (error) => {
        if (error) throw new Error('no se pudo grabar', error);
    });
}

const cargarBD = () => {

    try {
        listaPersona = require('../db/info.json');
    } catch (error) {
        listaPersona = [];
    }
    // console.log(listaPersona);
}


const agregar = (rut, nombres, apellidoPaterno, apellidoMaterno) => {

    cargarBD();

    let persona = {
        rut,
        nombres,
        apellidoPaterno,
        apellidoMaterno
    };
    listaPersona.push(persona);
    guardarBD();
    return persona;
}

const getListado = () => {

    cargarBD();
    return listaPersona;
}

const actualizar = (rut, nombres, apellidoPaterno, apellidoMaterno) => {

    cargarBD();
    let index = listaPersona.findIndex( perso => perso.rut === rut);

    if (index >= 0){
        listaPersona[index].nombres = nombres, apellidoPaterno = apellidoPaterno, apellidoMaterno = apellidoMaterno;
        guardarBD();
        return true;
    } else {
        return false;
    }
}

const borrar = ( rut, nombres, apellidoPaterno, apellidoMaterno ) => {
    cargarBD();
                // al hacer esto lo excluyo del listado
    let nuevoListado = listaPersona.filter( perso => perso.rut !== rut );

    if ( listaPersona.length === nuevoListado.length ) {
        return false;
    } else {
     listaPersona = nuevoListado;
     guardarBD();
     return true;   
    }

}

module.exports = {
    agregar,
    getListado,
    actualizar,
    borrar,
    cargarBD
}