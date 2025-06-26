import Zeus from './zeus.js';
import './globalLogger.js';

class Artemis extends Zeus {
    name = 'Artemis';
    hitpoints = 600;

    constructor() {
        super();
        this.updateValue('animals', 0);
    }

    // Add methods and properties as needed
    hunt() {
        const chance = Math.random();
        if (chance < 0.2) {
            log('is hunting... You caught an animal!', this);
            this.updateValue('animals', this.getValue('animals') + 1);
        } else {
            log('is hunting... No luck this time.', this);
        }
    }

    protectWildlife() {
        log('is protecting wildlife.', this);
        // Implementation for protecting wildlife
    }

    guideHunters() {
        log('is guiding hunters.', this);
        // Implementation for guiding hunters
    }

    shootArrow() {
        log(`is shooting an arrow.`, this);
        this.fight(this)
    }
}

export default Artemis;
