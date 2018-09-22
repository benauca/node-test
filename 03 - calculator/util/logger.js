/**
 * Logger consumido por la aplicacuón.-
 */
const { createLogger, format, transports, addColors } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const logger = createLogger({
    format: combine(
        label({ label: 'Calculator.' }),
        timestamp(),
        myFormat
    ),
    transports: [new transports.Console()]
});


module.exports = {
    logger
}