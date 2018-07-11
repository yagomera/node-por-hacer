const fs = require('fs');
const colors = require('colors');


let listadoPorHacer = [];

let guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, 'utf8', (err) => {

        if (err) throw new Error('Error de escritura', err);
    });

}


const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

//LISTAR TAREAS POR HACER
const listar = () => {

    cargarDB();
    console.log('Entradas de BD:');
    listadoPorHacer.forEach(element => {
        console.log(colors.green(
            element));
    });

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })


    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else return false;
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;

    } else return false;

}


module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}