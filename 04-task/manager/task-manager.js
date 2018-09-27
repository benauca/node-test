/**
 * TASK MANAGER
 * 
 */
let tasks = [];
const fs = require('fs');

/**
 * Lee el contenido del fichero que hace la labor de base de datos
 */
const readDatabase = () => {
    tasks = require('./../resources/database.json');
    return tasks;
}

/**
 * Guarda el fichero con las tareas actualizadas
 */
let writeDatabase = () => {
    let data = JSON.stringify(tasks);
    fs.writeFile('./resources/database.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

/**
 * Lista todas las tareas guardadas en el modelo
 * 
 * Las ordena en función de los parámetros.
 * @param {string} name Nombre de la tarea.
 * @param {string} description Descripcion de la tarea.
 * @param {string} tag Etiqueta de la tarea.
 * @param {string} start Fecha de inicio de la tarea.
 * @param {string} finish Fecha de Fin de la tarea.
 * 
 */
const listTask = (name, description, tag, startDate, finishDate) => {
    readDatabase();
    //Filtra todas las tareas en las que se cumple la condicion items.name === name
    if (name != null)
        tasks = tasks.filter(items => items.name === name)
    if (description != null)
        tasks = tasks.filter(items => items.description === description)
    if (tag != null)
        tasks = tasks.filter(items => items.tag === tag);
    if (startDate != null)
        tasks = tasks.filter(items => Date(items.start) >= Date(startDate));
    if (finishDate != null)
        tasks = tasks.filter(items => Date(items.finish) === Date(finishDate));
    return tasks;
}

/**
 * Devuelve la información de la tarea.
 * @param {string} name Nombre de la tarea
 */
const getTask = (name) => {
    readDatabase();
    //Filtra todas las tareas en las que se cumple la condicion items.name === name
    return tasks.filter(items => items.name === name)[0];
}

/**
 * Añadir tarea
 * 
 * @param {string} name Nombre de la tarea.
 * @param {string} description Descripcion de la tarea.
 * @param {string} tag Etiqueta de la tarea.
 * @param {string} start Fecha de inicio de la tarea.

 * @param {string} finish Fecha de Fin de la tarea.
 */
const addTask = (name, description, tag, start, finish, complete) => {
    readDatabase();
    //Solo se guardará una vez por nombre
    tasks = tasks.filter(items => items.name != name);
    start = (start == null) ? new Date().toISOString() : new Date(start).toISOString();
    finish = (finish == null) ? new Date().toISOString() : new Date(finish).toISOString();
    tasks.push({
        name,
        description,
        tag,
        start,
        finish,
        complete: false
    });
    writeDatabase();
}

/**
 * Añadir tarea
 * 
 * @param {string} name Nombre de la tarea.
 * @param {string} description Descripcion de la tarea.
 * @param {string} tag Etiqueta de la tarea.
 * @param {string} start Fecha de inicio de la tarea.
 * @param {string} finish Fecha de Fin de la tarea.
 */
const removeTask = (name, description, tag, start, finish) => {
    readDatabase();
    //Solo se guardará una vez por nombre
    tasks = tasks.filter(items => items.name != name);
    writeDatabase();
}

/**
 * Actualiza el estado de la tarea a completada..
 * 
 * @param {string} name Nombre de la tarea.
 */
const completeTask = (name) => {
    //Solo se guardará una vez por nombre
    readDatabase();
    let oneTask = tasks.filter(items => items.name === name)[0];
    oneTask.complete = true;
    tasks = tasks.filter(items => items.name != name);
    tasks.push(oneTask);

    writeDatabase();
}

module.exports = {
    listTask,
    getTask,
    addTask,
    removeTask,
    completeTask
}