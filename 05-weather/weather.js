/**
 * WEATTHER ....
 */
const argv = require('./conf/util').argv;
const axios = require('axios');
const location = require('./manager/location');

const direction = argv.location;



/**
 * Existen dos paquetes node para poder  realizar conexiones HTTP,
 *  - axios: basada en Promesas
 *  - Request: basada en Callback
 */
console.log(`Recuperando Información Location:  ${location}`);
location.getLocation(direction)
    .then(response => {
        console.log(response);
    }).catch(e => console.log(e));