//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);


let comando = argv._[0];

console.log(comando);

switch (comando) {
    case 'crear':
        console.log('Todo');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        console.log('List');
        porHacer.listar();
        break;

    case 'actualizar':
        console.log('Update');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`Actualzado ${ actualizado }`);
        break;

    case 'borrar':
        console.log('Borrar');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`Borrado: ${borrado}`);
        break;


    default:
        console.log('Comando desconocido');

}






//crear -d "descripcion"
//listar
//actualizar  -c true