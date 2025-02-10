import Chaos from './chaos.js';
import './globalLogger.js';

class Gaia extends Chaos {

    name = 'Gaia';
    hitpoints = 1000;

    constructor() {
        super();
        this.updateValue('lifeCreated', 0);
        this.updateValue('plantsNurtured', 0);
        this.updateValue('earthquakesCaused', 0);

        // Dynamically get methods of the child class
        const actions = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
            .filter(method => typeof this[method] === 'function' && method !== 'constructor' && method !== 'executeRandomAction')
            .map(method => this[method].bind(this));

        this.onTick(() => {
            if (this.hitpoints > 0) {
                this.executeRandomAction(actions);
            } else {
                logError(`${this.name} has no hitpoints left and cannot perform actions.`);
            }
        });
        // ...existing code...
    }

    createLife() {
        log('is creating life.', this);
        this.updateValue('lifeCreated', this.getValue('lifeCreated') + 1);
        // Implementation for creating life
    }

    nurturePlants() {
        log('is nurturing the plants.', this);
        this.updateValue('plantsNurtured', this.getValue('plantsNurtured') + 1);
        // Implementation for nurturing plants
    }

    causeEarthquake() {
        log('is causing an earthquake.', this);
        this.updateValue('earthquakesCaused', this.getValue('earthquakesCaused') + 1);
        // Implementation for causing an earthquake
    }

    executeRandomAction(actions) {
        if (actions.length === 0) return;
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        randomAction();
    }

    // Add methods and properties as needed
    // ...existing code...
}

export default Gaia;
