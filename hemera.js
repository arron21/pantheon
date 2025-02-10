import Chaos from './chaos.js';
import './globalLogger.js';

class Hemera extends Chaos {
    name = 'Hemera';
    constructor() {
        super();
        this.updateValue('day', false);
        this.startDayNightCycle();
    }

    turnNightIntoDay() {
        if (!this.getValue('day')) {
            this.updateValue('day', true);
            log('The day turns into night', this);
        }
    }

    startDayNightCycle() {
        setInterval(() => {
            this.turnNightIntoDay();
        }, 10000); // Switch every 10 seconds
    }
}

export default Hemera;
