const options = {
    param1: {
        demand: true,
        alias: 'p1'
    },
    param2: {
        demand: true,
        alias: 'p2'
    }
}
const argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('suma', 'Suma dos parámetros', options)
    .command('multiplica', 'Multiplicados parámetros', options)
    .command('print_m', 'Muestra por consola el resultado de la tabla de multiplicación', options)
    .command('export_m', 'Exporat a un fichero el resultado de la tabla de multiplicación', options)
    .help().argv;


module.exports = {
    argv
}