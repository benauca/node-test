/**
 * WEATTHER ....
 */
const argv = require('./../conf/util').argv;
const axios = require('axios');
const location = argv.location;
let configuration = [];

const readConfiguration = () => {
    configuration = require('./configuration.json');
    return configuration;
}

/**
 * Existen dos paquetes node para poder  realizar conexiones HTTP,
 *  - axios: basada en Promesas
 *  - Request: basada en Callback
 */

const getLocation = async(location) => {

    readConfiguration();
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${configuration[0].apikey}`
    url = encodeURI(url);
    let response = await axios.get(url);
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error("Error Recuperando la localización. Revise las coordenadas introducidas. " + location);
    }
    let result = response.data.results[0];
    let coords = result.geometry.location;
    // console.log('Direction', result.formatted_address);
    // console.log('latitud', coords.lat);
    // console.log('longitud', coords.lng);
    return {
        direction: result.formatted_address,
        latitud: coords.lat,
        longitud: coords.lng
    }
}

module.exports = {
    getLocation
}