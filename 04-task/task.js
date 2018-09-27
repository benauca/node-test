/**
 * Fichero principal de la aplicacion de Gestion de tareas
 */
const color = require('colors');
const argv = require('./utils/yargs-task').argv;
const { printHelp } = require('./utils/yargs-task');
const { listTask, getTask, addTask, removeTask, completeTask } = require('./manager/task-manager');
let command = argv._[0];
let results = [];
switch (command) {
    case 'add':
        try {
            addTask(argv.task, argv.description, argv.tag, argv.start, argv.finish)
        } catch (error) {
            console.log(`Error Creando la tarea ${argv.task}`, error);
        }
        break;
    case 'describe':
        console.log('================================='.green);
        console.log('===    Descripción de Una Tarea'.green);
        console.log('================================='.green);
        results = getTask(argv.task);
        console.log(`TAREA: ${results.name}\t- DESCRIPTION: ${results.description}\t- TAG: ${results.tag}\t- START DATE: ${results.start}\t- END DATE: ${results.finish}`.green);
        break;
    case 'remove':
        try {
            removeTask(argv.task)
        } catch (error) {
            console.log(`Error Creando la tarea ${argv.task}`, error);
        }
        break;
        break;
    case 'complete':
        console.log('Marca como completada una tarea........................');
        completeTask(argv.task)
        break;
    case 'all':
        results = listTask(argv.task, argv.description, argv.tag, argv.start, argv.finish);
        console.log('================================='.green);
        console.log('===    Lista todas las tareas'.green);
        console.log('================================='.green);
        for (let i = 0; i < results.length; i++) {
            console.log(`TAREA: ${results[i].name}\t- DESCRIPTION: ${results[i].description}\t- TAG: ${results[i].tag}\t- START DATE: ${results[i].start}\t- END DATE: ${results[i].finish}`.green);
        }
        break;
    default:
        printHelp();
        break;
}