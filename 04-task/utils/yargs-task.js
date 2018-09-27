/**
 * Gestión de comandos
 * 
 */
const addOptions = {
    task: {
        demand: true,
        alias: 'n',
        describe: 'Nombre de la tarea que queremos crear'
    },
    description: {
        describe: 'Descripción larga de la tarea',
        demand: false,
        alias: 'd'
    },
    complete: {
        describe: 'Marca la tarea como completada',
        default: false,
        alias: 'c'
    },
    tag: {
        describe: 'Etiqueta asociada a la tarea',
        alias: 't'
    },
    start: {
        describe: 'Fecha de Inicio de la tarea ',
        alias: 's'
    },
    finish: {
        describe: 'Fecha de Fin de la tarea ',
        alias: 'f'
    }
}

const listOptions = {
    task: {
        demand: false,
        alias: 'n',
        describe: 'Nombre de la tarea que queremos crear'
    },
    description: {
        describe: 'Descripción larga de la tarea',
        demand: false,
        alias: 'd'
    },
    complete: {
        describe: 'Marca la tarea como completada',
        default: false,
        alias: 'c'
    },
    tag: {
        describe: 'Etiqueta asociada a la tarea',
        alias: 't'
    },
    start: {
        describe: 'Fecha de Inicio de la tarea ',
        alias: 's'
    },
    finish: {
        describe: 'Fecha de Fin de la tarea ',
        alias: 'f'
    }
}

const removeOpt = completeOpt = describeOpt = {
    task: {
        demand: true,
        alias: 'n',
        describe: 'Nombre de la tarea que queremos crear'
    }
}

const allOptions = {
    tag: {
        describe: ' Lista todas las tareas asociadas a una etiqueta',
        alias: 't'
    },
    complete: {
        describe: ' Lista todas las tareas completadas',
        alias: 'c'
    }

}
const argv = require('yargs').
command('add', 'Añade una nueva tarea a la lista de tareas', addOptions)
    .command('remove', 'Elimina una tarea a la lista de tareas', removeOpt)
    .command('complete', 'Marca una nueva tarea como completada', completeOpt)
    .command('describe', 'Muestra el detalle de una tarea', describeOpt)
    .command('all', 'Lista todas las tareas. En caso de no recibr ningún parámetro Lista todas las tareas.', listOptions)
    .help().argv;

const yargs = require('yargs');

printHelp = () => { yargs.showHelp(); }
module.exports = {
    argv,
    printHelp
}