import Chaos from './chaos.js';

class Logger extends Chaos {

    getDay() {
        const dayStatus = this.getValue('day') ? 'Day' : 'Night';
        let backgroundColor = '';
        if(dayStatus === 'Day') { 
            backgroundColor = bgYellow;
        } else {
            backgroundColor = bgMagenta;
        }
        return backgroundColor
           
    }

    logInfo(text, deity) {
        console.log(cText(this.getDay(), `${deity?.name || ''} ${text}`, 2, 2));
    }

    logWarning(text) {
        const dayStatus = this.getValue('day') ? 'Day' : 'Night';
        const colorCode = this.getValue('day') ? '\x1b[43m' : '\x1b[45m';
        console.log(`${colorCode}WARNING [${dayStatus}]: ${text}\x1b[0m`);
    }

    logError(text) {
        console.log(`Death... ${text}\x1b[0m`);
    }
}

export default Logger;

export const black = '\x1b[30m';
export const red = '\x1b[91m';
export const green = '\x1b[32m';
export const yellow = '\x1b[33m';
export const blue = '\x1b[34m';
export const blueLight = '\x1b[94m';
export const magenta = '\x1b[35m';
export const cyan = '\x1b[36m';
export const white = '\x1b[37m';
export const gray = '\x1b[90m';
export const bgBlack = '\x1b[40m';
export const bgRed = '\x1b[41m';
export const bgGreen = '\x1b[42m';
export const bgYellow = '\x1b[43m';
export const bgBlue = '\x1b[44m';
export const bgMagenta = '\x1b[45m';
export const bgCyan = '\x1b[46m';
export const bgWhite = '\x1b[47m';
export const bgGray = '\x1b[100m';


export const reset = '\x1b[0m';

/**
 * Formats text with the specified color and optional padding.
 * @param {string} color - The color code.
 * @param {string} text - The text to format.
 * @param {number} [leftPadding=0] - Optional left padding.
 * @param {number} [rightPadding=0] - Optional right padding.
 * @returns {string} The formatted text.
 */
export function cText(color, text, leftPadding = 0, rightPadding = 0) {
  const leftPad = ' '.repeat(leftPadding);
  const rightPad = ' '.repeat(rightPadding);
  return `${color}${leftPad}${text}${rightPad}${reset}`;
}

export function cTextP(color, text, leftPadding = 0, rightPadding = 0) {
    const leftPad = ' '.repeat(leftPadding);
    const rightPad = ' '.repeat(rightPadding);
    return `${gray}(${color}${leftPad}${text}${rightPad}${gray})${reset}`;
  }
  