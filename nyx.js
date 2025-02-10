import Chaos from './chaos.js';
import './globalLogger.js';

class Nyx extends Chaos {
    name = 'Nyx';
    constructor() {
        super();
        this.startDayNightCycle();
    }

    turnDayIntoNight() {
        if (this.getValue('day')) {
            this.updateValue('day', false);
            log('The day turns into night', this);
        }
    }

    startDayNightCycle() {
        setInterval(() => {
            this.turnDayIntoNight();
        }, 10000); // Switch every 10 seconds
    }

}

export default Nyx;
