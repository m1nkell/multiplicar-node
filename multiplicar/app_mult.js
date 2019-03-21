const argv = require('../config/yargs').argv;

const { baseMult,listarMult  } = require('./multiplicar');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarMult(argv.base, argv.limite);
        break;
    case 'crear':
        baseMult(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(error => console.log(error));
        break;

    default:
        console.log('Comando no reconocido');
        
}