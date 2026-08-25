import Gaia from './gaia.js';
import './globalLogger.js';

class Hemera extends Gaia {
    name = 'Hemera';
    hitpoints = 500;

    constructor() {
        super();
    }

    turnNightIntoDay() {
        if (!this.getValue('day')) {
            // 2% chance per tick to successfully turn night into day
            if (Math.random() < 0.02) {
                this.updateValue('day', true);
                log('turns the night into day. ☀️', this);
            }
        }
    }
}

export default Hemera;
