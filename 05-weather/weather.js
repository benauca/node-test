/**
 * WEATTHER ....
 */
const argv          = require('./conf/util').argv;
const axios         = require('axios');
const location      = argv.location;
let configuration=[];

const readConfiguration = () => {
    configuration = require('./configuration.json');
    return configuration;
}

/**
 * Existen dos paquetes node para poder  realizar conexiones HTTP,
 *  - axios: basada en Promesas
 *  - Request: basada en Callback
 */
console.log(`Recuperando Información Location:  ${location}` );
readConfiguration();
console.log(`Recuperando ApiKey:  ${configuration[0].apikey}` );
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${configuration[0].apikey}`
axios.get(url)
    .then(response => {
        console.log(response);})
    .catch(error => console.log("Error", error));






