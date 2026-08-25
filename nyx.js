import Gaia from './gaia.js';
import './globalLogger.js';

class Nyx extends Gaia {
    name = 'Nyx';
    hitpoints = 500;

    constructor() {
        super();
    }

    turnDayIntoNight() {
        if (this.getValue('day')) {
            // 2% chance per tick to successfully turn day into night
            if (Math.random() < 0.02) {
                this.updateValue('day', false);
                log('turns the day into night. 🌙', this);
            }
        }
    }
}

export default Nyx;
