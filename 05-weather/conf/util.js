const argv = require('yargs')
    .options( {
        location: {
            desc: 'Dirección o localidad que queremos consultar. Por ejemplo \"Madrid España\"',
            alias: 'l',
            demand: true,
       }
    }).argv;

    module.exports = {
        argv
    }