import Cronus from './cronus.js';
import './globalLogger.js';

class Zeus extends Cronus {
    name = 'Zeus';
    hitpoints = 500;
    animals = ['eagle', 'bull', 'swan', 'ant', 'satyr', 'cuckoo'];

    constructor() {
        super();
    }

    throwLightningBolt() {
        log('throws a lightning bolt!', this);
        this.fight(this);
    }

    transformIntoAnimal(animal) {
        const chosenAnimal = animal || this.animals[Math.floor(Math.random() * this.animals.length)];
        log(`transforms into a ${chosenAnimal}. 🦅`, this);
    }

    summonThunderstorm() {
        log('summons a thunderstorm! ⚡', this);
    }
}

export default Zeus;
