import Logger from './logger.js';
globalThis.global = globalThis;
const logger = new Logger();

global.logInfo = (message) => {
    logger.logInfo(message);
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('game-log', {
            detail: { message }
        }));
    }
};

global.logError = (message) => {
    logger.logError(message);
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('game-log', {
            detail: { message, isError: true }
        }));
    }
};

global.log = (message, deity) => {
    logger.logInfo(message, deity);
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('game-log', {
            detail: {
                message,
                deity: deity ? { name: deity.name, hitpoints: deity.hitpoints } : null
            }
        }));
    }
};
