/**
 * Manager Para controlar el Clima a partir del servicio..
 * 
 * https://openweathermap.org/
 */


const axios = require('axios');
let configuration = [];

const readConfiguration = () => {
    configuration = require('./configuration.json');
    return configuration;
}


const getWeather = async(latitud, longitud) => {
    readConfiguration();
    const apiKey = configuration[0].openKey;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric`
    let response = await axios.get(url);
    return response.data.main.temp;

}

module.exports = {
    getWeather
}