import crearArchivo from './helpers/multiplicar.js'
import { argv } from './config/yargs.js'

const { base, listar, hasta } = argv

console.clear();

// const [ , ,arg3 = 'base=5' ] = process.argv
// const [ , base ] = arg3.split('=');

crearArchivo(base, listar, hasta)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err))