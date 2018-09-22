const fs = require('fs');
const { logger } = require('./logger');

/**
 * Los parámetros recibidos deben ser numéricos. En caso contrario se lanzará un error
 */
let validate = (param1, param2) => {
    return new Promise((resolve, reject) => {
        if (!Number(param1) || !Number(param2)) {
            reject(`Parámetros No permitidos. Revise los parámetros introducidos: ${param1} - ${param2}`);
            return;
        }
        resolve(true);
    });
}

let validate_sync = async(param1, param2) => {
    if (Number(param1) && Number(param2)) {
        return true
    } else throw new Error(`Parámetros No permitidos. Revise los parámetros introducidos: ${param1} - ${param2}`);
}


let sumar = (param1, param2) => {
    return param1 + param2
}

let multiplicar = (param1, param2) => {
    return param1 * param2
}

let restar = (param1, param2) => {
    return param1 - param2
}

let dividir = (param1, param2) => {
    return param1 / param2
}

let print_m = (base, limite) => {
    for (let i = 1; i < limite; i++) {
        logger.info(` ${base} * ${i} = ${base*i}`);
    }
}

/**
 * Exporta el resultado de la tabla de multilplicar a un fichero plano con el resultado.
 */
let export_m = async(base, limite) => {
    let name = `TABLA_DEL_${base}.txt`;
    let isOk = await validate_sync(base, limite);
    logger.info("Resultado de la validacion .........." + isOk);
    let fileName = await createFile_sync(name, base, limite);
    logger.info("=========== " + fileName);
    return fileName;
}


/**
 * Exporta el resultado de la tabla de multilplicar a un fichero plano con el resultado.
 */
let export_m_ok = async(base, limite) => {
    let name = `TABLA_DEL_${base}.txt`;
    validate(base, limite)
        .then(
            response => {
                logger.info(' Resultado de la Validación: ' + response);
                return createFile(name, base, limite);
            }
        )
        //Tratamos la respuesta de la promesa de la creación
        .then(
            response => {
                logger.info(' Fichero Creado ' + response);
                return response.name;
            }
        )
        .catch(error => {
            logger.info('Error en la creación del fichero', error);
            return;
        });
}

let createFile_sync = async(name, base, limite) => {
    logger.info(`Nombre del fichero ${name}`);
    let data = 'RESULTADOS DE LA TABLA DE MULTIPLICAR.\n';
    data += '==============================================================================================\n';
    for (let i = 1; i < limite + 1; i++) {
        data += ` ${base} * ${i} = ${base*i}\n`;
    }
    fs.writeFile(`./tablas/${name}`, data);
    return `./tablas/${name}`;
}

let createFile = (name, base, limite) => {
    return new Promise((resolve, reject) => {
        logger.info(`Nombre del fichero ${name}`);
        let data = 'RESULTADOS DE LA TABLA DE MULTIPLICAR.\n';
        data += '==============================================================================================\n';
        for (let i = 1; i < limite + 1; i++) {
            data += ` ${base} * ${i} = ${base*i}\n`;
        }
        fs.writeFile(`./tablas/${name}`, data);
        resolve(`./tablas/${name}`);
    });
}

module.exports = {
    sumar: sumar,
    restar,
    multiplicar,
    dividir,
    print_m,
    export_m
}