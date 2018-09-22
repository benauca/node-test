/**
 * Calculador de consola que realizara operaciones en funcion de uns parametros dados
 * node calculator.js sum -params=2,3
 */
const { logger } = require('./util/logger');
const argv = require('./util/config').argv;
const { sumar, multiplicar, restar, dividir, print_m, export_m } = require('./util/operators');

logger.info("Recuperando los parametros de la operación. Comando: " + argv._[0]);
logger.info("Recuperando los parametros de la operación. Param1: " + argv.param1);
logger.info("Recuperando los parametros de la operación. Param2: " + argv.param2);

let command = argv._[0];

switch (command) {
    case 'suma':
        logger.info(`Ejecutando la accion ${command}`);
        logger.info("RESULTADO " + sumar(argv.param1, argv.param2));
        break;
    case 'multiplica':
        logger.info(`Ejecutando la accion ${command}`);
        logger.info("RESULTADO " + multiplicar(argv.param1, argv.param2));
        break;
    case 'divide':
        logger.info(`Ejecutando la accion ${command}`);
        logger.info("RESULTADO " + dividir(argv.param1, argv.param2));
        break;
    case 'resta':
        logger.info(`Ejecutando la accion ${command}`);
        logger.info("RESULTADO " + restar(argv.param1, argv.param2));
        break;
    case 'print_m':
        logger.info(`Ejecutando la accion ${command}`);
        logger.info("RESULTADO " + print_m(argv.param1, argv.param2));
        break;
    case 'export_m':
        logger.info(`Ejecutando la accion ${command}`);
        export_m(argv.param1, argv.param2).then(
            file => logger.info("RESULTADO " + file));
        break;
    default:
        logger.error(`Operación ${command} No permitida....`);
        break;
}