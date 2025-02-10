import Cronus from './cronus.js';
import './globalLogger.js';

class Zeus extends Cronus {
    name = 'Zeus';

    hitpoints = 500;
    constructor() {
        super();
        // ...existing code...
    }

    throwLightningBolt() {
        log(`${this.name} throws a lightning bolt at!`);
        this.fight(this);
    }

    transformIntoAnimal(animal) {
        log(`${this.name} transforms into a ${animal}.`);
    }

    summonThunderstorm() {
        log(`${this.name} summons a thunderstorm!`);
    }

    // Add methods and properties as needed
    // ...existing code...
}

export default Zeus;
