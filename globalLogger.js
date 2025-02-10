import Logger from './logger.js';
globalThis.global = globalThis
const logger = new Logger();

global.logInfo = (message) => {
    logger.logInfo(message);
};

global.logError = (message) => {
    logger.logError(message);
};

global.log = (message, deity) => {
    logger.logInfo(message, deity);
};

