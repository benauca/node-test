/**
 * WEATTHER ....
 */
const argv = require('./conf/util').argv;
const axios = require('axios');
const location = require('./manager/location');
const weather = require('./manager/weather-manager');

const direction = argv.location;



/**
 * Existen dos paquetes node para poder  realizar conexiones HTTP,
 *  - axios: basada en Promesas
 *  - Request: basada en Callback
 */
const getInfo = async(direction) => {
    try {
        let coords = await location.getLocation(direction);
        let temp = await weather.getWeather(coords.latitud, coords.longitud);
        console.log(`La  temperatura en  ${direction} es de ${temp} ºC`);
    } catch (error) {
        console.log("Error", error);
    }

}
getInfo(direction);